"use client";

import type { NewsletterContent } from "@/types/content";

type NewsletterFormProps = {
  content: NewsletterContent;
};

export function NewsletterForm({ content }: NewsletterFormProps) {
  return (
    <form
      className="flex items-center gap-2"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        type="email"
        required
        placeholder={content.placeholder}
        className="w-full min-w-0 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-primary-500"
      />
      <button
        type="submit"
        aria-label={content.buttonLabel}
        className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white transition-colors duration-200 hover:bg-primary-600"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M3.333 8h9.334M8.667 3.667 13 8l-4.333 4.333"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
