import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { FeatureHighlightContent } from "@/types/content";
import { cn } from "@/lib/cn";

type FeatureHighlightProps = {
  content: FeatureHighlightContent;
  id?: string;
  background?: "white" | "surface";
};

export function FeatureHighlight({ content, id, background = "white" }: FeatureHighlightProps) {
  const imageFirst = content.imagePosition === "left";

  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20", background === "surface" ? "bg-surface" : "bg-white")}
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal
            className={cn(!imageFirst && "lg:order-2")}
          >
            <Image
              src={content.image.src}
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
              className="mx-auto h-auto w-full max-w-[380px]"
            />
          </Reveal>

          <Reveal
            delay={150}
            className={cn("flex flex-col items-center gap-5 text-center lg:items-start lg:text-left", !imageFirst && "lg:order-1")}
          >
            <h2 className="font-heading text-2xl font-semibold leading-snug text-ink-soft sm:text-3xl">
              {content.title}
            </h2>
            <p className="max-w-md text-sm leading-7 text-body">{content.description}</p>
            <Button {...content.cta} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
