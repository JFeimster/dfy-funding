import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function StartSuccessPage() {
  return (
    <section className="py-24">
      <Container className="max-w-3xl">
        <div className="rounded-3xl border border-black/10 p-8">
          <h1 className="text-3xl font-semibold tracking-tight">Your funding plan request is in.</h1>
          <p className="mt-4 text-black/70">
            We received your intake. The next move is to book a strategy call or continue reviewing how the process works.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white">
              Book a Strategy Call
            </Link>
            <Link href="/how-it-works" className="rounded-full border border-black/15 px-5 py-3 text-sm font-medium">
              See How It Works
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
