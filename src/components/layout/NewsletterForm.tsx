"use client";

import Image from "next/image";
import type { NewsletterContent } from "@/types/content";

type NewsletterFormProps = {
  content: NewsletterContent;
};

export function NewsletterForm({ content }: NewsletterFormProps) {
  return (
    <form
      className="relative"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        type="email"
        required
        placeholder={content.placeholder}
        className="w-full rounded-lg border border-white/15 bg-white/5 py-2.5 pr-11 pl-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-primary-500"
      />
      <button
        type="submit"
        aria-label={content.buttonLabel}
        className="absolute top-1/2 right-3 flex -translate-y-1/2 items-center justify-center opacity-70 transition-opacity duration-200 hover:opacity-100"
      >
        <Image src="/assets/send.svg" alt="" width={6} height={6} className="h-4 w-4" />
      </button>
    </form>
  );
}
