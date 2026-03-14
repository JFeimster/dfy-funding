import { Container } from "@/components/layout/container";

export function PositioningStrip({ items }: { items: string[] }) {
  return (
    <section className="border-y border-black/10 py-4">
      <Container className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-black/65">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </Container>
    </section>
  );
}
