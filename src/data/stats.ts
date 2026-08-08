import type { StatsContent } from "@/types/content";

export const statsContent: StatsContent = {
  headingLead: "Helping a local",
  headingHighlight: "business reinvent itself",
  description: "We reached here with our hard work and dedication",
  stats: [
    {
      icon: { src: "/assets/members.svg", alt: "Members icon", width: 17, height: 17 },
      value: "2,245,341",
      label: "Members",
    },
    {
      icon: { src: "/assets/clubs.svg", alt: "Clubs icon", width: 17, height: 17 },
      value: "46,328",
      label: "Clubs",
    },
    {
      icon: {
        src: "/assets/event_booking.svg",
        alt: "Event bookings icon",
        width: 17,
        height: 17,
      },
      value: "828,867",
      label: "Event Bookings",
    },
    {
      icon: { src: "/assets/payments.svg", alt: "Payments icon", width: 17, height: 17 },
      value: "1,926,436",
      label: "Payments",
    },
  ],
};
