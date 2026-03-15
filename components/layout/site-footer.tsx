import Link from "next/link";
import { Container } from "./container";
import { footerNav } from "@/content/navigation";
import { getSiteConfig } from "@/content/site";

export function SiteFooter() {
  const siteConfig = getSiteConfig();
  return (
    <footer className="border-t border-black/[0.08] bg-white py-16">
      <Container className="grid gap-12 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold text-black">{siteConfig.name}</div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-black/60">
            Funding systems, readiness, and execution for operators.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-black/50">Company</h3>
          <ul className="mt-4 space-y-3">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-black/70 transition hover:text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-black/50">Services</h3>
          <ul className="mt-4 space-y-3">
            {footerNav.services.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-black/70 transition hover:text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
