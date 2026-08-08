import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { servicesContent } from "@/data/services";

export function Services() {
  return (
    <section id="features" className="bg-white pb-20 sm:pb-24">
      <Container>
        <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
          <h2 className="font-heading text-2xl font-semibold leading-snug text-ink sm:text-3xl">
            {servicesContent.title}
          </h2>
          <p className="text-sm text-body">{servicesContent.eyebrow}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesContent.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 100}>
              <div className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-black/5 bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 transition-colors duration-300 group-hover:bg-primary-100">
                  <Image
                    src={card.icon.src}
                    alt={card.icon.alt}
                    width={card.icon.width}
                    height={card.icon.height}
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink">{card.title}</h3>
                <p className="text-sm leading-6 text-body">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
