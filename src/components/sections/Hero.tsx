import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { heroContent } from "@/data/hero";

export function Hero() {
  return (
    <section id="home" className="bg-surface">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
          <Reveal className="order-2 flex flex-col items-center gap-5 text-center lg:order-1 lg:items-start lg:text-left">
            <h1 className="font-heading text-4xl font-semibold leading-tight text-ink sm:text-[42px] lg:text-[46px]">
              {heroContent.headingLead}
              <br />
              <span className="text-primary-600">{heroContent.headingHighlight}</span>
            </h1>
            <p className="max-w-md text-base leading-7 text-body">{heroContent.description}</p>
            <Button {...heroContent.cta} className="mx-auto lg:mx-0" />
          </Reveal>

          <Reveal delay={150} className="order-1 lg:order-2">
            <Image
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              width={heroContent.image.width}
              height={heroContent.image.height}
              priority
              className="mx-auto h-auto w-full max-w-[420px] lg:max-w-none"
            />
          </Reveal>
        </div>

        <div className="flex items-center justify-center gap-2 pb-14 lg:pb-16">
          {Array.from({ length: heroContent.slideCount }).map((_, index) => (
            <span
              key={index}
              className={
                index === 0
                  ? "h-2 w-2 rounded-full bg-primary-500"
                  : "h-2 w-2 rounded-full bg-primary-200"
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
