import { Container } from "@/components/layout/container";

export function SystemsPreview() {
  return (
    <section className="py-24">
      <Container className="rounded-3xl border border-black/[0.08] bg-neutral-100/80 p-8 shadow-sm md:p-12 ring-1 ring-black/[0.04]">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Capital ops system</div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            The system behind the funding matters as much as the funding itself.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black/70">
            The win isn’t just getting approved. The win is installing workflows, documentation habits,
            and operating logic that make capital easier to pursue again.
          </p>
        </div>
      </Container>
    </section>
  );
}
