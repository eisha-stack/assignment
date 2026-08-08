import type { FooterContent } from "@/types/content";

export const footerContent: FooterContent = {
  logo: {
    src: "/assets/logo_footer.svg",
    alt: "Nexcent logo",
    width: 25,
    height: 17,
  },
  copyrightLines: ["Copyright © 2020 Landify Ui Kit.", "All rights reserved."],
  columns: [
    {
      title: "Company",
      links: [
        { label: "About us", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Contact us", href: "#contact" },
        { label: "Pricing", href: "#pricing" },
        { label: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help center", href: "#help-center" },
        { label: "Terms of service", href: "#terms" },
        { label: "Legal", href: "#legal" },
        { label: "Privacy policy", href: "#privacy" },
        { label: "Status", href: "#status" },
      ],
    },
  ],
  newsletter: {
    title: "Stay up to date",
    placeholder: "Your email address",
    buttonLabel: "Subscribe",
  },
  socialLinks: [
    { icon: { src: "/assets/instagram.svg", alt: "Instagram", width: 11, height: 11 }, href: "#instagram", label: "Instagram" },
    { icon: { src: "/assets/website.svg", alt: "Dribbble", width: 11, height: 11 }, href: "#website", label: "Dribbble" },
    { icon: { src: "/assets/twitter.svg", alt: "Twitter", width: 11, height: 11 }, href: "#twitter", label: "Twitter" },
    { icon: { src: "/assets/youtube.svg", alt: "YouTube", width: 11, height: 11 }, href: "#youtube", label: "YouTube" },
  ],
};
