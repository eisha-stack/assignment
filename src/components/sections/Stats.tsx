import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { statsContent } from "@/data/stats";

export function Stats() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <h2 className="font-heading text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              {statsContent.headingLead}
              <br />
              <span className="text-primary-600">{statsContent.headingHighlight}</span>
            </h2>
            <p className="max-w-sm text-sm leading-7 text-body">{statsContent.description}</p>
          </Reveal>

          <div className="grid grid-cols-2 gap-8 sm:gap-10">
            {statsContent.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 100} className="flex items-start gap-3">
                <Image
                  src={stat.icon.src}
                  alt={stat.icon.alt}
                  width={stat.icon.width}
                  height={stat.icon.height}
                  className="mt-1 h-[33.41px] w-[33.41px] shrink-0"
                />
                <div className="flex flex-col">
                  <span className="font-heading text-xl font-semibold text-ink sm:text-2xl">
                    {stat.value}
                  </span>
                  <span className="text-sm text-body">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
