import Link from "next/link";
import { Container } from "@/components/layout/container";

type Cta = {
  label: string;
  href: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
}) {
  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-4xl">
        {eyebrow ? <div className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-black/55">{eyebrow}</div> : null}
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">{description}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryCta ? (
              <Link href={primaryCta.href} className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white">
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link href={secondaryCta.href} className="rounded-full border border-black/15 px-5 py-3 text-sm font-medium">
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        )}
      </Container>
    </section>
  );
}
