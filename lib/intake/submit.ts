type IntakePayload = Record<string, string>;

export async function submitIntake(payload: IntakePayload) {
  const webhookUrl = process.env.INTAKE_WEBHOOK_URL;

  if (!webhookUrl) {
    console.log("No INTAKE_WEBHOOK_URL configured. Payload:", payload);
    return { ok: true };
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to submit intake");
  }

  return { ok: true };
}
