import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNavToggle } from "@/components/layout/MobileNavToggle";
import { siteContent } from "@/data/site";
import { navCta, navLinks } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          <Link href="#home" className="flex items-center gap-2">
            <Image
              src={siteContent.logo.src}
              alt={siteContent.logo.alt}
              width={siteContent.logo.width}
              height={siteContent.logo.height}
            />
            <span className="font-heading text-lg font-semibold text-ink-soft">
              {siteContent.name}
            </span>
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            <nav className="flex items-center gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-primary-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Button {...navCta} />
          </div>

          <MobileNavToggle navLinks={navLinks} cta={navCta} />
        </div>
      </Container>
    </header>
  );
}
