"use client";

import { useState } from "react";
import Link from "next/link";
import type { ButtonContent, NavLink } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type MobileNavToggleProps = {
  navLinks: NavLink[];
  cta: ButtonContent;
};

export function MobileNavToggle({ navLinks, cta }: MobileNavToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md"
      >
        <span
          className={cn(
            "block h-0.5 w-6 rounded-full bg-ink transition-all duration-300",
            isOpen && "translate-y-2 rotate-45",
          )}
        />
        <span
          className={cn(
            "block h-0.5 w-6 rounded-full bg-ink transition-all duration-300",
            isOpen && "opacity-0",
          )}
        />
        <span
          className={cn(
            "block h-0.5 w-6 rounded-full bg-ink transition-all duration-300",
            isOpen && "-translate-y-2 -rotate-45",
          )}
        />
      </button>

      <div
        className={cn(
          "fixed inset-x-0 top-[72px] z-40 origin-top border-t border-black/5 bg-white shadow-lg transition-all duration-300 ease-out",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2.5 text-base font-medium text-ink-soft transition-colors hover:bg-primary-50 hover:text-primary-700"
            >
              {link.label}
            </Link>
          ))}
          <Button {...cta} className="mt-3 w-full" />
        </nav>
      </div>
    </div>
  );
}
