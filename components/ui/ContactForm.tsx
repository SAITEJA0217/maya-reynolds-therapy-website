"use client";

import { useId, useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

type ContactFormProps = {
  sessionOptions: string[];
  note: string;
};

/**
 * Appointment request form. Posts to NEXT_PUBLIC_FORM_ENDPOINT (e.g. Formspree,
 * Basin, or a HIPAA-compliant intake provider) when configured. Without an
 * endpoint it runs in preview mode so the draft can be reviewed end-to-end.
 */
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export function ContactForm({ sessionOptions, note }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const id = useId();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!endpoint) {
      setStatus("sent");
      form.reset();
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setStatus(response.ok ? "sent" : "error");
      if (response.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-2 block w-full min-h-12 border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-olive focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay";
  const label = "text-small font-medium text-ink";

  if (status === "sent") {
    return (
      <div role="status" className="border border-line bg-paper p-8 lg:p-10">
        <p className="font-serif text-h3 text-ink">Thank you — your request has been sent.</p>
        <p className="mt-3 text-muted">Dr. Reynolds will follow up with you directly.</p>
        {!endpoint && (
          <p className="mt-4 text-small text-muted">
            (Preview mode: form delivery is connected at launch.)
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <div>
        <label htmlFor={`${id}-name`} className={label}>
          Name
        </label>
        <input id={`${id}-name`} name="name" type="text" autoComplete="name" required className={field} />
      </div>
      <div>
        <label htmlFor={`${id}-email`} className={label}>
          Email
        </label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" required className={field} />
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className={label}>
          Phone <span className="font-normal text-muted">(optional)</span>
        </label>
        <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div>
        <label htmlFor={`${id}-format`} className={label}>
          How would you like to meet?
        </label>
        <select id={`${id}-format`} name="format" className={`${field} cursor-pointer`} defaultValue={sessionOptions[0]}>
          {sessionOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${id}-message`} className={label}>
          What&apos;s bringing you to therapy?
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={4}
          aria-describedby={`${id}-note`}
          className={`${field} resize-y`}
        />
        <p id={`${id}-note`} className="mt-2 text-[0.85rem] text-muted">
          {note}
        </p>
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-3 rounded-full bg-olive px-8 text-[0.95rem] font-medium text-paper transition-colors duration-300 hover:bg-olive-deep disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send request"}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">
            →
          </span>
        </button>
        {status === "error" && (
          <p role="alert" className="mt-4 text-small text-clay">
            Something went wrong sending your request. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
