"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/data/types";

type NavigationProps = {
  items: NavItem[];
};

/**
 * Mirrors the reference navigation: dropdown folders for About, Specialties
 * and Methods, then FAQs and Contact. Dropdowns open on hover (pointer) and
 * on click / Enter / Space (keyboard + touch). Escape closes everything.
 */
export function Navigation({ items }: NavigationProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const baseId = useId();

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      if (mobileOpen) {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onPointer(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [mobileOpen]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const lastIndex = items.length - 1;

  return (
    <nav ref={navRef} aria-label="Main">
      {/* Desktop */}
      <ul className="hidden items-center gap-1 lg:flex">
        {items.map((item, index) => {
          const menuId = `${baseId}-${index}`;
          const isOpen = openMenu === item.label;
          const isContact = index === lastIndex;

          if (!item.children) {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={
                    isContact
                      ? "ml-3 inline-flex min-h-11 items-center rounded-full bg-olive px-6 text-[0.95rem] font-medium text-paper transition-colors duration-300 hover:bg-olive-deep"
                      : "inline-flex min-h-11 items-center px-3.5 text-[0.95rem] text-ink transition-colors hover:text-clay"
                  }
                >
                  {item.label}
                </a>
              </li>
            );
          }

          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={menuId}
                onClick={() => setOpenMenu(isOpen ? null : item.label)}
                className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 px-3.5 text-[0.95rem] text-ink transition-colors hover:text-clay"
              >
                {item.label}
                <Chevron open={isOpen} />
              </button>
              <div
                id={menuId}
                className={`absolute left-0 top-full pt-2 transition-all duration-300 ease-(--ease-calm) ${
                  isOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-1 opacity-0"
                }`}
              >
                <ul className="min-w-60 border border-line bg-paper py-2 shadow-[0_18px_40px_-24px_rgb(38_36_31/0.35)]">
                  {item.children.map((child) => (
                    <li key={child.href + child.label}>
                      <a
                        href={child.href}
                        onClick={() => setOpenMenu(null)}
                        className="block px-5 py-2.5 text-[0.95rem] text-ink transition-colors hover:bg-sand hover:text-olive"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Mobile toggle */}
      <button
        ref={toggleRef}
        type="button"
        className="relative z-50 -mr-2 inline-flex size-12 items-center justify-center lg:hidden"
        aria-expanded={mobileOpen}
        aria-controls={`${baseId}-mobile`}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileOpen((open) => !open)}
      >
        <span aria-hidden="true" className="relative block h-3.5 w-6">
          <span
            className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-300 ${
              mobileOpen ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-300 ${
              mobileOpen ? "top-1.5 -rotate-45" : "top-3.5"
            }`}
          />
        </span>
      </button>

      {/* Mobile panel */}
      <div
        id={`${baseId}-mobile`}
        className={`fixed inset-0 z-40 overflow-y-auto bg-linen px-5 pb-12 pt-24 transition-opacity duration-300 sm:px-8 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col divide-y divide-line border-y border-line">
          {items.map((item) => (
            <li key={item.label} className="py-5">
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-[1.75rem] leading-tight text-ink"
              >
                {item.label}
              </a>
              {item.children && (
                <ul className="mt-3 flex flex-col">
                  {item.children.map((child) => (
                    <li key={child.href + child.label}>
                      <a
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-base text-muted hover:text-olive"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className={`size-2.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="M1.5 4 6 8.5 10.5 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
