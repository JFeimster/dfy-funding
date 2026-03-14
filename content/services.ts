export const services = [
  {
    slug: "capital-readiness-ops",
    name: "Capital Readiness Ops",
    href: "/services/capital-readiness-ops",
    summary:
      "Fix the readiness gaps that block approvals, weaken terms, or make funding slow and fragile.",
    deliverables: [
      "readiness review",
      "documentation cleanup",
      "capital profile positioning",
      "approval blocker mapping",
    ],
  },
  {
    slug: "funding-execution",
    name: "Funding Execution",
    href: "/services/funding-execution",
    summary:
      "Secure the right capital with a tighter execution process, better-fit options, and less operator drag.",
    deliverables: [
      "capital strategy",
      "lender packaging",
      "submission support",
      "execution tracking",
    ],
  },
  {
    slug: "capital-ops-system",
    name: "Capital Ops System",
    href: "/services/capital-ops-system",
    summary:
      "Install workflows, automations, and operating systems that make future funding more repeatable.",
    deliverables: [
      "workflow design",
      "capital ops SOPs",
      "automation mapping",
      "repeatable funding process",
    ],
  },
] as const;
