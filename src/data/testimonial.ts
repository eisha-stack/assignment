import type { TestimonialContent } from "@/types/content";
import { clientsContent } from "@/data/clients";

export const testimonialContent: TestimonialContent = {
  image: {
    src: "/assets/tesla_logo.svg",
    alt: "Tesla logo on a dark rounded card",
    width: 250,
    height: 250,
  },
  quote:
    "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis dui, vel rutrum tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida nibh. Nullam ut molestie arcu, at hendrerit odio. Morbi lobortis eros ligula, sed molestie nibh bibendum et. Suspendisse cursus tellus sed augue ultrices, quis facilisis nulla sodales. Suspendisse potenti. Quisque malesuada enim quam, vitae placerat erat feugiat odio, neque et efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.",
  name: "Tim Smith",
  role: "British Dragon Boat Racing Association",
  clientLogos: clientsContent.logos,
  cta: {
    label: "Meet all customers",
    href: "#customers",
    variant: "link",
    showArrow: true,
  },
};
