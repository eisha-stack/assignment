import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { footerContent } from "@/data/footer";
import { siteContent } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <Link href="#home" className="flex items-center gap-2">
              <Image
                src={footerContent.logo.src}
                alt={footerContent.logo.alt}
                width={footerContent.logo.width}
                height={footerContent.logo.height}
              />
              <span className="font-heading text-lg font-semibold text-white">
                {siteContent.name}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-6 text-white/50">
              {footerContent.copyrightLines[0]}
              <br />
              {footerContent.copyrightLines[1]}
            </p>
            <div className="mt-2 flex items-center gap-3">
              {footerContent.socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center transition-opacity duration-200 hover:opacity-70"
                >
                  <Image
                    src={social.icon.src}
                    alt=""
                    width={social.icon.width}
                    height={social.icon.height}
                    className="h-6 w-6"
                  />
                </Link>
              ))}
            </div>
          </div>

          {footerContent.columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="font-heading text-sm font-semibold text-white">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors duration-200 hover:text-primary-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-semibold text-white">
              {footerContent.newsletter.title}
            </h3>
            <NewsletterForm content={footerContent.newsletter} />
          </div>
        </div>
      </Container>
    </footer>
  );
}
