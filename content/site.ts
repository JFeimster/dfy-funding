const DEFAULT_DOMAIN = "https://dfy-funding.vercel.app";
const DEFAULT_BOOKING_URL = "https://calendar.app.google/7GtvQXdwXEAbcXot6";

export const baseSiteConfig = {
  name: "DFY Funding",
  headline: "Get Fundable. Get Funded. Build a Capital System That Holds.",
  plainEnglish: "Funding systems, readiness, and execution for operators.",
  positioning:
    "DFY Funding is the Capital Ops brand for operators who need more than a loan broker.",
  primaryCta: {
    label: "Start Your Funding Plan",
    href: "/start",
  },
  secondaryCta: {
    label: "Book a Strategy Call",
    href: "/contact",
  },
  tertiaryCta: {
    label: "See How It Works",
    href: "/how-it-works",
  },
} as const;

export function getSiteConfig() {
  const domain = process.env.SITE_URL || DEFAULT_DOMAIN;
  const bookingUrl = process.env.BOOKING_URL || DEFAULT_BOOKING_URL;
  return {
    ...baseSiteConfig,
    domain,
    secondaryCta: {
      ...baseSiteConfig.secondaryCta,
      href: bookingUrl,
    },
  };
}

/** @deprecated Use getSiteConfig() for env-driven domain and booking URL. */
export const siteConfig = {
  ...baseSiteConfig,
  domain: DEFAULT_DOMAIN,
  secondaryCta: {
    ...baseSiteConfig.secondaryCta,
    href: DEFAULT_BOOKING_URL,
  },
};
