import { Container } from "@/components/layout/container";

export function ProcessSteps({
  items,
}: {
  items: { step: string; title: string; body: string }[];
}) {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">How it works</div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Readiness. Execution. Capital ops.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-black/[0.08] bg-white p-6 shadow-sm ring-1 ring-black/[0.04]"
            >
              <div className="text-xs font-semibold text-black/40">{item.step}</div>
              <h3 className="mt-4 text-xl font-semibold text-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
