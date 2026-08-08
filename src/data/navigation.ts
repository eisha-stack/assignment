import type { ButtonContent, NavLink } from "@/types/content";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Community", href: "#community" },
  { label: "Blog", href: "#blog" },
  { label: "Pricing", href: "#pricing" },
];

export const navCta: ButtonContent = {
  label: "Register Now",
  href: "#register",
  variant: "primary",
  size: "md",
  showArrow: true,
};
