import type { TestimonialContent } from "@/types/content";

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
  clientLogos: [
    { src: "/assets/purple_logo.svg", alt: "Client logo 1", width: 17, height: 17 },
    { src: "/assets/client2.svg", alt: "Client logo 2", width: 17, height: 17 },
    { src: "/assets/client3.svg", alt: "Client logo 3", width: 19, height: 17 },
    { src: "/assets/client4.svg", alt: "Client logo 4", width: 17, height: 17 },
    { src: "/assets/client5.svg", alt: "Client logo 5", width: 17, height: 17 },
    { src: "/assets/client6.svg", alt: "Client logo 6", width: 18, height: 17 },
  ],
  cta: {
    label: "Meet all customers",
    href: "#customers",
    variant: "link",
    showArrow: true,
  },
};
