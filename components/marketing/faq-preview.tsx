import { Container } from "@/components/layout/container";
import { faqs } from "@/content/faq";

export function FAQPreview() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">FAQ</div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Common questions before you start.
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-black/[0.08] bg-white p-6 shadow-sm ring-1 ring-black/[0.04]"
            >
              <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
