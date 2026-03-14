"use client";

import { submitIntakeAction } from "@/app/actions/intake";

const inputClass =
  "mt-2 w-full rounded-2xl border border-black/15 px-4 py-3 text-sm outline-none";

export function StartIntakeForm() {
  return (
    <form action={submitIntakeAction} className="space-y-10">
      <section className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium">First name</label>
          <input name="firstName" className={inputClass} required />
        </div>
        <div>
          <label className="text-sm font-medium">Last name</label>
          <input name="lastName" className={inputClass} required />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input name="email" type="email" className={inputClass} required />
        </div>
        <div>
          <label className="text-sm font-medium">Phone</label>
          <input name="phone" className={inputClass} required />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium">Company name</label>
          <input name="companyName" className={inputClass} required />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Business type</label>
          <input name="businessType" className={inputClass} required />
        </div>
        <div>
          <label className="text-sm font-medium">Industry</label>
          <input name="industry" className={inputClass} required />
        </div>
        <div>
          <label className="text-sm font-medium">State</label>
          <input name="state" className={inputClass} required />
        </div>
        <div>
          <label className="text-sm font-medium">Years in business</label>
          <input name="yearsInBusiness" className={inputClass} required />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Funding goal range</label>
          <input name="fundingGoalRange" className={inputClass} required />
        </div>
        <div>
          <label className="text-sm font-medium">Urgency</label>
          <input name="urgency" className={inputClass} required />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium">Use of funds</label>
          <textarea name="useOfFunds" className={inputClass} rows={4} required />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Monthly revenue range</label>
          <input name="monthlyRevenueRange" className={inputClass} required />
        </div>
        <div>
          <label className="text-sm font-medium">Bookkeeping / tax status</label>
          <input name="bookkeepingStatus" className={inputClass} required />
        </div>
        <div>
          <label className="text-sm font-medium">Credit band</label>
          <input name="creditBand" className={inputClass} required />
        </div>
        <div>
          <label className="text-sm font-medium">Needs systems support?</label>
          <input name="needsSystemsSupport" className={inputClass} required />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium">What is blocking progress right now?</label>
          <textarea name="blockerSummary" className={inputClass} rows={5} required />
        </div>
      </section>

      <button type="submit" className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white">
        Submit Funding Plan Request
      </button>
    </form>
  );
}
