import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { testimonialContent } from "@/data/testimonial";

export function Testimonial() {
  return (
    <section id="community" className="bg-surface py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Reveal>
            <div className="mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl shadow-card">
              <Image
                src={testimonialContent.image.src}
                alt={testimonialContent.image.alt}
                width={testimonialContent.image.width}
                height={testimonialContent.image.height}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={150} className="flex flex-col gap-6 text-center lg:text-left">
            <p className="text-sm leading-7 text-body">{testimonialContent.quote}</p>

            <div className="flex flex-col gap-2">
              <p className="font-heading text-base font-semibold text-primary-500">
                {testimonialContent.name}
              </p>
              <p className="text-sm text-body">{testimonialContent.role}</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-6">
              {testimonialContent.clientLogos.map((logo, index) => (
                <Image
                  key={`${logo.src}-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-8 w-auto"
                />
              ))}
              <Button {...testimonialContent.cta} />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
