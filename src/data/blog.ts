import type { BlogSectionContent } from "@/types/content";

export const blogContent: BlogSectionContent = {
  title: "Caring is the new marketing",
  description:
    "The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.",
  posts: [
    {
      image: {
        src: "/assets/blog1.svg",
        alt: "Person relaxing at home with a mug reading on a laptop",
        width: 257,
        height: 200,
      },
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      href: "#blog-1",
      readMoreLabel: "Readmore",
    },
    {
      image: {
        src: "/assets/blog2.svg",
        alt: "Hands typing on a laptop keyboard beside a coffee cup",
        width: 257,
        height: 200,
      },
      title: "What are your safeguarding responsibilities and how can you manage them?",
      href: "#blog-2",
      readMoreLabel: "Readmore",
    },
    {
      image: {
        src: "/assets/blog3.svg",
        alt: "Overhead view of a desk with a laptop showing a dashboard",
        width: 257,
        height: 200,
      },
      title: "Revamping the Membership Model with Triathlon Australia",
      href: "#blog-3",
      readMoreLabel: "Readmore",
    },
  ],
};
