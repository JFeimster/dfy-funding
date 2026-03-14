import { Container } from "@/components/layout/container";

export function SystemsPreview() {
  return (
    <section className="py-20">
      <Container className="rounded-3xl border border-black/10 bg-neutral-50 p-8 md:p-12">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-black/55">Capital ops system</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            The system behind the funding matters as much as the funding itself.
          </h2>
          <p className="mt-4 text-lg leading-8 text-black/70">
            The win is not just getting approved. The win is installing workflows, documentation habits,
            and operating logic that make capital easier to pursue again.
          </p>
        </div>
      </Container>
    </section>
  );
}
