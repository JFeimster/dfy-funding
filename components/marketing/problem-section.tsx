import { Container } from "@/components/layout/container";

export function ProblemSection({ problems }: { problems: string[] }) {
  return (
    <section className="py-20">
      <Container className="grid gap-10 md:grid-cols-2">
        <div>
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-black/55">The problem</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Most businesses do not have a capital system. They have a funding event.
          </h2>
        </div>
        <div className="space-y-4">
          {problems.map((problem) => (
            <div key={problem} className="rounded-2xl border border-black/10 p-5 text-black/75">
              {problem}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
