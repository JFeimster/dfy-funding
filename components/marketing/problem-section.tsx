import { Container } from "@/components/layout/container";

export function ProblemSection({ problems }: { problems: string[] }) {
  return (
    <section className="py-24">
      <Container className="grid gap-16 md:grid-cols-2">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">The problem</div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Most businesses do not have a capital system. They have a funding event.
          </h2>
        </div>
        <div className="space-y-5">
          {problems.map((problem) => (
            <div
              key={problem}
              className="rounded-2xl border border-black/[0.08] bg-white p-6 text-black/75 shadow-sm ring-1 ring-black/[0.04]"
            >
              {problem}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
