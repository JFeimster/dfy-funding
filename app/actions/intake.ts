"use server";

import { redirect } from "next/navigation";
import { intakeSchema } from "@/lib/intake/schema";
import { submitIntake } from "@/lib/intake/submit";

export async function submitIntakeAction(formData: FormData) {
  const raw = Object.fromEntries(formData.entries());
  const parsed = intakeSchema.safeParse(raw);

  if (!parsed.success) {
    throw new Error("Invalid form submission");
  }

  await submitIntake(
    Object.fromEntries(
      Object.entries(parsed.data).map(([key, value]) => [key, String(value)])
    )
  );

  redirect("/start/success");
}
