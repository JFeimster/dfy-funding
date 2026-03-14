import { z } from "zod";

export const intakeSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  companyName: z.string().min(2),
  businessType: z.string().min(1),
  industry: z.string().min(1),
  state: z.string().min(2),
  yearsInBusiness: z.string().min(1),
  fundingGoalRange: z.string().min(1),
  useOfFunds: z.string().min(1),
  urgency: z.string().min(1),
  monthlyRevenueRange: z.string().min(1),
  bookkeepingStatus: z.string().min(1),
  creditBand: z.string().min(1),
  blockerSummary: z.string().min(1),
  needsSystemsSupport: z.string().min(1),
});
