import { Container } from "@/components/layout/container";

export function ProcessSteps({
  items,
}: {
  items: { step: string; title: string; body: string }[];
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-black/55">How it works</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Readiness. Execution. Capital ops.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.step} className="rounded-3xl border border-black/10 p-6">
              <div className="text-sm font-medium text-black/45">{item.step}</div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
