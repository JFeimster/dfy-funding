import { Container } from "@/components/layout/container";
import { proofItems } from "@/content/proof";

export function ProofPreview() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Proof</div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Outcomes that go beyond a single approval.
          </h2>
          <p className="mt-4 text-black/70">
            Readiness, execution, and systems that hold—so the next cycle is easier.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {proofItems.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-black/[0.08] bg-white p-6 shadow-sm ring-1 ring-black/[0.04]"
            >
              <h3 className="text-xl font-semibold text-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
