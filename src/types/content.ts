export type IconAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NavLink = {
  label: string;
  href: string;
};

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "link";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonContent = {
  label: string;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
};

export type SiteContent = {
  name: string;
  tagline: string;
  description: string;
  logo: IconAsset;
};

export type HeroContent = {
  headingLead: string;
  headingHighlight: string;
  description: string;
  cta: ButtonContent;
  image: IconAsset;
  slideCount: number;
};

export type ClientLogo = IconAsset;

export type ClientsContent = {
  title: string;
  description: string;
  logos: ClientLogo[];
};

export type ServiceCard = {
  icon: IconAsset;
  title: string;
  description: string;
};

export type ServicesContent = {
  title: string;
  eyebrow: string;
  cards: ServiceCard[];
};

export type FeatureHighlightContent = {
  image: IconAsset;
  title: string;
  description: string;
  cta: ButtonContent;
  imagePosition: "left" | "right";
};

export type StatItem = {
  icon: IconAsset;
  value: string;
  label: string;
};

export type StatsContent = {
  headingLead: string;
  headingHighlight: string;
  description: string;
  stats: StatItem[];
};

export type TestimonialContent = {
  image: IconAsset;
  quote: string;
  name: string;
  role: string;
  clientLogos: ClientLogo[];
  cta: ButtonContent;
};

export type BlogPost = {
  image: IconAsset;
  title: string;
  href: string;
  readMoreLabel: string;
};

export type BlogSectionContent = {
  title: string;
  description: string;
  posts: BlogPost[];
};

export type CtaBannerContent = {
  heading: string;
  cta: ButtonContent;
};

export type FooterLinkColumn = {
  title: string;
  links: NavLink[];
};

export type SocialLink = {
  icon: IconAsset;
  href: string;
  label: string;
};

export type NewsletterContent = {
  title: string;
  placeholder: string;
  buttonLabel: string;
};

export type FooterContent = {
  logo: IconAsset;
  copyrightLines: [string, string];
  columns: FooterLinkColumn[];
  newsletter: NewsletterContent;
  socialLinks: SocialLink[];
};
