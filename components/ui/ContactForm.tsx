"use client";

import { useId, useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import { pillClass } from "./PillLink";

type Status = "idle" | "sending" | "sent" | "preview" | "error";
type FieldName = "name" | "email" | "phone" | "message";
type Errors = Partial<Record<FieldName, string>>;

type ContactFormProps = {
  sessionOptions: string[];
  note: string;
};

/**
 * Appointment request form. Posts to NEXT_PUBLIC_FORM_ENDPOINT (e.g. Formspree,
 * Basin, or a HIPAA-compliant intake provider) when configured. Without an
 * endpoint it runs in preview mode: it validates, then says plainly that
 * nothing was sent.
 */
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
const MESSAGE_MAX = 1000;

function validate(field: FieldName, value: string): string | undefined {
  const v = value.trim();
  switch (field) {
    case "name":
      if (!v) return "Please enter your name.";
      if (v.length < 2) return "Please enter at least 2 characters.";
      return;
    case "email":
      if (!v) return "Please enter your email address.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Please enter a valid email address, like name@example.com.";
      return;
    case "phone":
      if (v && !/^\+?[\d\s().-]{7,20}$/.test(v)) return "Please enter a valid phone number, or leave this blank.";
      return;
    case "message":
      if (v.length > MESSAGE_MAX) return `Please keep this under ${MESSAGE_MAX} characters.`;
      return;
  }
}

const FIELDS: FieldName[] = ["name", "email", "phone", "message"];

export function ContactForm({ sessionOptions, note }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [messageLength, setMessageLength] = useState(0);
  const statusRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const fieldId = (name: FieldName | "format") => `${id}-${name}`;
  const errorId = (name: FieldName) => `${id}-${name}-error`;

  function onBlur(event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = event.target.name as FieldName;
    // Skip when heading to the submit button: submit validates everything, and
    // changing the layout mid-click would move the button out from under the pointer.
    if ((event.relatedTarget as HTMLElement | null)?.getAttribute("type") === "submit") return;
    // Validate on blur only once the person has typed something.
    if (!event.target.value && !errors[name]) return;
    setErrors((prev) => ({ ...prev, [name]: validate(name, event.target.value) }));
  }

  function onChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = event.target.name as FieldName;
    if (name === "message") setMessageLength(event.target.value.length);
    // Once a field shows an error, re-check as the person types so it clears promptly.
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: validate(name, event.target.value) }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nextErrors: Errors = {};
    for (const field of FIELDS) {
      const message = validate(field, String(data.get(field) ?? ""));
      if (message) nextErrors[field] = message;
    }
    setErrors(nextErrors);
    const firstInvalid = FIELDS.find((field) => nextErrors[field]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    if (!endpoint) {
      setStatus("preview");
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("sent");
      form.reset();
      setMessageLength(0);
      requestAnimationFrame(() => statusRef.current?.focus());
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" || status === "preview") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="border border-line bg-field p-8 outline-none lg:p-10"
      >
        {status === "sent" ? (
          <p className="h3 font-display text-ink">Thank you — your request has been sent.</p>
        ) : (
          <>
            <p className="h3 font-display text-ink">Your request looks complete.</p>
            <p className="mt-3">
              This preview of the site isn’t connected to an inbox yet, so <strong className="font-medium text-ink">nothing was sent</strong>. Once
              appointment requests are connected, this form will deliver them directly.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="caps mt-6 border-b border-current pb-1.5 text-ink transition-colors hover:text-accent"
            >
              Back to the form
            </button>
          </>
        )}
      </div>
    );
  }

  const field = (name: FieldName) =>
    `mt-2 block w-full min-h-12 rounded-[3px] border bg-field px-4 py-3 text-base text-ink transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-accent ${
      errors[name] ? "border-error" : "border-field-line focus:border-ink"
    }`;
  const label = "text-[0.9375rem] font-medium text-ink";

  const describedBy = (name: FieldName, extra?: string) =>
    [errors[name] ? errorId(name) : null, extra].filter(Boolean).join(" ") || undefined;

  const errorText = (name: FieldName) =>
    errors[name] ? (
      <p id={errorId(name)} className="mt-2 text-[0.875rem] text-error">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Appointment request" className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
      <p className="text-[0.875rem] sm:col-span-2 md:col-span-1 xl:col-span-2">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">required</span> are required.
      </p>

      <div>
        <label htmlFor={fieldId("name")} className={label}>
          Name <span aria-hidden="true" className="text-accent">*</span>
        </label>
        <input
          id={fieldId("name")}
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={describedBy("name")}
          onBlur={onBlur}
          onChange={onChange}
          className={field("name")}
        />
        {errorText("name")}
      </div>

      <div>
        <label htmlFor={fieldId("email")} className={label}>
          Email <span aria-hidden="true" className="text-accent">*</span>
        </label>
        <input
          id={fieldId("email")}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={describedBy("email")}
          onBlur={onBlur}
          onChange={onChange}
          className={field("email")}
        />
        {errorText("email")}
      </div>

      <div>
        <label htmlFor={fieldId("phone")} className={label}>
          Phone <span className="font-normal text-body">(optional)</span>
        </label>
        <input
          id={fieldId("phone")}
          name="phone"
          type="tel"
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={describedBy("phone")}
          onBlur={onBlur}
          onChange={onChange}
          className={field("phone")}
        />
        {errorText("phone")}
      </div>

      <div className="sm:col-span-2 md:col-span-1 xl:col-span-2">
        <label htmlFor={fieldId("format")} className={label}>
          How would you like to meet?
        </label>
        <select
          id={fieldId("format")}
          name="format"
          className="mt-2 block min-h-12 w-full cursor-pointer rounded-[3px] border border-field-line bg-field px-4 py-3 text-base text-ink focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-accent"
          defaultValue={sessionOptions[0]}
        >
          {sessionOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2 md:col-span-1 xl:col-span-2">
        <label htmlFor={fieldId("message")} className={label}>
          What&apos;s bringing you to therapy? <span className="font-normal text-body">(optional)</span>
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={4}
          maxLength={MESSAGE_MAX + 200}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy("message", `${id}-note`)}
          onBlur={onBlur}
          onChange={onChange}
          className={`${field("message")} resize-y`}
        />
        {errorText("message")}
        <div className="mt-2 flex justify-between gap-4 text-[0.85rem]">
          <p id={`${id}-note`}>{note}</p>
          <p aria-hidden="true" className={`shrink-0 tabular-nums ${messageLength > MESSAGE_MAX ? "text-error" : ""}`}>
            {messageLength}/{MESSAGE_MAX}
          </p>
        </div>
      </div>

      {/* Spam honeypot: hidden from people and assistive tech */}
      <div aria-hidden="true" className="hidden">
        <label>
          Leave this empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="sm:col-span-2 md:col-span-1 xl:col-span-2">
        <button type="submit" disabled={status === "sending"} className={pillClass}>
          {status === "sending" ? "Sending…" : "Send request"}
        </button>
        <p className="mt-4 text-[0.85rem]">
          This form isn’t monitored for emergencies. If you’re in crisis, call or text 988, or call 911.
        </p>
        <div aria-live="polite">
          {status === "error" && (
            <p role="alert" className="mt-4 text-[0.9375rem] text-error">
              Something went wrong and your request wasn’t sent. Please try again in a moment.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
