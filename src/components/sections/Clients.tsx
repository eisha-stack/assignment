import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { clientsContent } from "@/data/clients";

export function Clients() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-2 text-center">
          <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
            {clientsContent.title}
          </h2>
          <p className="text-sm text-body">{clientsContent.description}</p>
        </Reveal>

        <Reveal
          delay={150}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {clientsContent.logos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-[33.41px] w-[33.41px] shrink-0 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
