import Link from "next/link";
import { Container } from "@/components/layout/container";
import { services } from "@/content/services";

export function OfferLaneCards() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Three lanes. One capital system.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-black/70">
            Funding is the lead offer. Capital ops is the edge. Systems make it stick.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-3xl border border-black/[0.08] bg-white p-6 shadow-sm transition hover:shadow-md ring-1 ring-black/[0.04]"
            >
              <h3 className="text-xl font-semibold text-black">{service.name}</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{service.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-black/75">
                {service.deliverables.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-6 inline-block text-sm font-medium text-black underline underline-offset-4 transition hover:no-underline"
              >
                View service
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
