import type { ServicesContent } from "@/types/content";

export const servicesContent: ServicesContent = {
  eyebrow: "Who is Nextcent suitable for?",
  title: "Manage your entire community in a single system",
  cards: [
    {
      icon: {
        src: "/assets/membership_organisations.svg",
        alt: "Membership organisations icon",
        width: 46,
        height: 39,
      },
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: {
        src: "/assets/national_associations.svg",
        alt: "National associations icon",
        width: 46,
        height: 39,
      },
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: {
        src: "/assets/clubs_groups.svg",
        alt: "Clubs and groups icon",
        width: 46,
        height: 39,
      },
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ],
};
