import { Container } from "@/components/layout/container";
import { proofItems } from "@/content/proof";

export function ProofPreview() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-black/55">Proof</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            More than lead gen. More than a one-off funding event.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {proofItems.map((item) => (
            <article key={item.title} className="rounded-3xl border border-black/10 p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
