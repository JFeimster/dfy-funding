import Link from "next/link";
import { Container } from "./container";
import { footerNav } from "@/content/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 py-12">
      <Container className="grid gap-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">DFY Funding</div>
          <p className="mt-3 max-w-sm text-sm text-black/70">
            Funding systems, readiness, and execution for operators.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Company</h3>
          <div className="mt-3 space-y-2">
            {footerNav.company.map((item) => (
              <Link key={item.href} href={item.href} className="block text-sm text-black/70 hover:text-black">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Services</h3>
          <div className="mt-3 space-y-2">
            {footerNav.services.map((item) => (
              <Link key={item.href} href={item.href} className="block text-sm text-black/70 hover:text-black">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
