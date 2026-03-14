import { Container } from "@/components/layout/container";
import { faqs } from "@/content/faq";

export function FAQPreview() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-black/55">FAQ</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Common questions before you start.</h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-black/10 p-6">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
