import { Container } from "@/components/layout/container";

export function PositioningStrip({ items }: { items: string[] }) {
  return (
    <section className="border-y border-black/[0.08] py-5">
      <Container className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-black/60">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-x-6">
            {i > 0 && <span className="text-black/30" aria-hidden> · </span>}
            {item}
          </span>
        ))}
      </Container>
    </section>
  );
}
