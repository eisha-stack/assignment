import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ctaBannerContent } from "@/data/cta";

export function CtaBanner() {
  return (
    <section id="pricing" className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <h2 className="max-w-md font-heading text-3xl font-semibold leading-tight text-ink-soft sm:max-w-lg sm:text-4xl">
            {ctaBannerContent.heading}
          </h2>
          <Button {...ctaBannerContent.cta} size="lg" />
        </Reveal>
      </Container>
    </section>
  );
}
