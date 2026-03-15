"use client";

import { submitIntakeAction } from "@/app/actions/intake";

const inputClass =
  "mt-2 w-full rounded-xl border border-black/[0.12] bg-white px-4 py-3 text-sm outline-none transition focus:border-black/25 focus:ring-2 focus:ring-black/5";
const labelClass = "block text-sm font-medium text-black/80";

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
];

export function StartIntakeForm() {
  return (
    <form action={submitIntakeAction} className="space-y-12">
      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-black/60 mb-6">Contact</h3>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelClass}>First name</label>
            <input id="firstName" name="firstName" className={inputClass} required />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>Last name</label>
            <input id="lastName" name="lastName" className={inputClass} required />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email</label>
            <input id="email" name="email" type="email" className={inputClass} required />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Phone</label>
            <input id="phone" name="phone" type="tel" className={inputClass} required />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="companyName" className={labelClass}>Company name</label>
            <input id="companyName" name="companyName" className={inputClass} required />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-black/60 mb-6">Business</h3>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="businessType" className={labelClass}>Business type</label>
            <select id="businessType" name="businessType" className={inputClass} required>
              <option value="">Select…</option>
              <option value="LLC">LLC</option>
              <option value="S-Corp">S-Corp</option>
              <option value="C-Corp">C-Corp</option>
              <option value="Sole prop">Sole prop</option>
              <option value="Partnership">Partnership</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="industry" className={labelClass}>Industry</label>
            <select id="industry" name="industry" className={inputClass} required>
              <option value="">Select…</option>
              <option value="Agency / Marketing">Agency / Marketing</option>
              <option value="Real estate">Real estate</option>
              <option value="Construction / Trades">Construction / Trades</option>
              <option value="Professional services">Professional services</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Tech / SaaS">Tech / SaaS</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="state" className={labelClass}>State</label>
            <select id="state" name="state" className={inputClass} required>
              <option value="">Select…</option>
              {US_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="yearsInBusiness" className={labelClass}>Years in business</label>
            <select id="yearsInBusiness" name="yearsInBusiness" className={inputClass} required>
              <option value="">Select…</option>
              <option value="Less than 1">Less than 1</option>
              <option value="1–2">1–2</option>
              <option value="2–5">2–5</option>
              <option value="5–10">5–10</option>
              <option value="10+">10+</option>
            </select>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-black/60 mb-6">Funding</h3>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="fundingGoalRange" className={labelClass}>Funding goal range</label>
            <select id="fundingGoalRange" name="fundingGoalRange" className={inputClass} required>
              <option value="">Select…</option>
              <option value="Under $50k">Under $50k</option>
              <option value="$50k–$100k">$50k–$100k</option>
              <option value="$100k–$250k">$100k–$250k</option>
              <option value="$250k–$500k">$250k–$500k</option>
              <option value="$500k–$1M">$500k–$1M</option>
              <option value="$1M+">$1M+</option>
            </select>
          </div>
          <div>
            <label htmlFor="urgency" className={labelClass}>Urgency</label>
            <select id="urgency" name="urgency" className={inputClass} required>
              <option value="">Select…</option>
              <option value="Immediate (0–30 days)">Immediate (0–30 days)</option>
              <option value="Short-term (1–3 months)">Short-term (1–3 months)</option>
              <option value="Medium-term (3–6 months)">Medium-term (3–6 months)</option>
              <option value="Planning ahead (6+ months)">Planning ahead (6+ months)</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="useOfFunds" className={labelClass}>Use of funds</label>
            <textarea id="useOfFunds" name="useOfFunds" className={inputClass} rows={4} required />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-black/60 mb-6">Readiness</h3>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="monthlyRevenueRange" className={labelClass}>Monthly revenue range</label>
            <select id="monthlyRevenueRange" name="monthlyRevenueRange" className={inputClass} required>
              <option value="">Select…</option>
              <option value="Under $10k">Under $10k</option>
              <option value="$10k–$25k">$10k–$25k</option>
              <option value="$25k–$50k">$25k–$50k</option>
              <option value="$50k–$100k">$50k–$100k</option>
              <option value="$100k–$250k">$100k–$250k</option>
              <option value="$250k+">$250k+</option>
            </select>
          </div>
          <div>
            <label htmlFor="bookkeepingStatus" className={labelClass}>Bookkeeping / tax status</label>
            <select id="bookkeepingStatus" name="bookkeepingStatus" className={inputClass} required>
              <option value="">Select…</option>
              <option value="Up to date">Up to date</option>
              <option value="Behind but catching up">Behind but catching up</option>
              <option value="Needs cleanup">Needs cleanup</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
          <div>
            <label htmlFor="creditBand" className={labelClass}>Credit band</label>
            <select id="creditBand" name="creditBand" className={inputClass} required>
              <option value="">Select…</option>
              <option value="Excellent (720+)">Excellent (720+)</option>
              <option value="Good (660–719)">Good (660–719)</option>
              <option value="Fair (620–659)">Fair (620–659)</option>
              <option value="Below 620">Below 620</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div>
            <label htmlFor="needsSystemsSupport" className={labelClass}>Needs systems support?</label>
            <select id="needsSystemsSupport" name="needsSystemsSupport" className={inputClass} required>
              <option value="">Select…</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="blockerSummary" className={labelClass}>What is blocking progress right now?</label>
            <textarea id="blockerSummary" name="blockerSummary" className={inputClass} rows={5} required />
          </div>
        </div>
      </section>

      <button
        type="submit"
        className="rounded-full bg-black px-6 py-3.5 text-sm font-medium !text-white transition hover:bg-black/90"
      >
        Submit Funding Plan Request
      </button>
    </form>
  );
}
