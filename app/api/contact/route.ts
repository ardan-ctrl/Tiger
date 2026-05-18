import { NextResponse } from "next/server";

const requiredFields = ["name", "brand", "email"];

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const missingField = requiredFields.find((field) => {
    const value = (payload as Record<string, unknown>)[field];
    return typeof value !== "string" || value.trim().length === 0;
  });

  if (missingField) {
    return NextResponse.json({ error: `Missing ${missingField}` }, { status: 400 });
  }

  const formEndpoint = process.env.FORM_ENDPOINT;

  if (formEndpoint) {
    const response = await fetch(formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, source: "paper-tiger-landing" }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Form endpoint rejected submission" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
