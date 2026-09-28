"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/data/types";
import { pillClass } from "@/components/ui/PillLink";

type NavigationProps = {
  items: NavItem[];
};

/**
 * Reference navigation pattern:
 * - ≥1024px: tracked-caps links, folders open a panel on hover / click / Enter,
 *   final item rendered as the outlined ellipse "Contact" pill.
 * - <1024px: thin three-line toggle → full-screen overlay; folders open a
 *   sub-list with a "Back" control (Squarespace 7.1 folder behaviour).
 */
export function Navigation({ items }: NavigationProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [folder, setFolder] = useState<NavItem | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const baseId = useId();

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      if (mobileOpen) {
        setMobileOpen(false);
        setFolder(null);
        toggleRef.current?.focus();
      }
    }
    function onPointer(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenMenu(null);
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

  function closeMobile() {
    setMobileOpen(false);
    setFolder(null);
  }

  const last = items.length - 1;

  return (
    <nav ref={navRef} aria-label="Main">
      {/* Desktop */}
      <ul className="hidden items-center gap-[2.3vw] lg:flex xl:gap-9">
        {items.map((item, index) => {
          const menuId = `${baseId}-m${index}`;
          const isOpen = openMenu === item.label;

          if (index === last) {
            return (
              <li key={item.label} className="ml-[0.4vw]">
                <a href={item.href} className={`${pillClass} min-h-12 px-5`}>
                  {item.label}
                </a>
              </li>
            );
          }

          if (!item.children) {
            return (
              <li key={item.label}>
                <a href={item.href} className="caps inline-flex min-h-11 items-center text-ink transition-colors hover:text-accent">
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
                className="caps inline-flex min-h-11 cursor-pointer items-center text-ink transition-colors hover:text-accent"
              >
                {item.label}
              </button>
              <div
                id={menuId}
                className={`absolute left-1/2 top-full z-40 -translate-x-1/2 pt-1 transition-[opacity,visibility] duration-300 ${
                  isOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                <ul className="min-w-56 bg-canvas px-6 py-4 text-center shadow-[0_10px_30px_-18px_rgb(0_0_0/0.3)]">
                  {item.children.map((child) => (
                    <li key={child.href + child.label}>
                      <a
                        href={child.href}
                        onClick={() => setOpenMenu(null)}
                        className="block py-1.5 text-[0.9rem] text-ink transition-colors hover:text-accent"
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

      {/* Mobile toggle — three thin rules, as in the reference */}
      <button
        ref={toggleRef}
        type="button"
        className="relative z-50 -mr-2 inline-flex size-12 items-center justify-center lg:hidden"
        aria-expanded={mobileOpen}
        aria-controls={`${baseId}-mobile`}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
      >
        <span aria-hidden="true" className="relative block h-3.5 w-9">
          <span
            className={`absolute left-0 h-px w-9 bg-ink transition-all duration-300 ${mobileOpen ? "top-1.75 rotate-45" : "top-0"}`}
          />
          <span
            className={`absolute left-0 top-1.75 h-px w-9 bg-ink transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute left-0 h-px w-9 bg-ink transition-all duration-300 ${mobileOpen ? "top-1.75 -rotate-45" : "top-3.5"}`}
          />
        </span>
      </button>

      {/* Mobile overlay */}
      <div
        id={`${baseId}-mobile`}
        className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-canvas pt-28 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {folder ? (
          <div className="flex flex-1 flex-col items-center gap-2 px-8 pb-10 text-center">
            <button
              type="button"
              onClick={() => setFolder(null)}
              className="caps mb-4 inline-flex min-h-11 items-center gap-2 text-ink"
            >
              <span aria-hidden="true">←</span> Back
            </button>
            <p className="sr-only">{folder.label}</p>
            <ul className="flex flex-col items-center gap-1">
              {folder.children?.map((child) => (
                <li key={child.href + child.label}>
                  <a
                    href={child.href}
                    onClick={closeMobile}
                    className="block py-2 font-display text-[1.6rem] font-display-weight text-ink"
                  >
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="flex flex-1 flex-col items-center gap-1 px-8 pb-10 text-center">
            {items.map((item, index) =>
              index === last ? (
                <li key={item.label} className="mt-6">
                  <a href={item.href} onClick={closeMobile} className={pillClass}>
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.label}>
                  {item.children ? (
                    <button
                      type="button"
                      onClick={() => setFolder(item)}
                      className="inline-flex items-center gap-2 py-2 font-display text-[1.9rem] font-display-weight text-ink"
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-base text-accent">
                        →
                      </span>
                      <span className="sr-only">(open submenu)</span>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={closeMobile}
                      className="block py-2 font-display text-[1.9rem] font-display-weight text-ink"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ),
            )}
          </ul>
        )}
      </div>
    </nav>
  );
}
