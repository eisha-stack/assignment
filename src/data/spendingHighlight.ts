import type { FeatureHighlightContent } from "@/types/content";

export const spendingHighlightContent: FeatureHighlightContent = {
  image: {
    src: "/assets/Illustration2.svg",
    alt: "Illustration of two colleagues reviewing a membership profile screen",
    width: 308,
    height: 229,
  },
  title: "The unseen of spending three years at Pixelgrade",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo lorem. Sed accumsan vitae est varius auctor. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis integra iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
  cta: {
    label: "Learn More",
    href: "#learn-more",
    variant: "primary",
    size: "sm",
  },
  imagePosition: "left",
};
