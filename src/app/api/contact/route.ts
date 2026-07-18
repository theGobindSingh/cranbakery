import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  contact?: string;
  message?: string;
}

export const POST = async (request: Request) => {
  const body = (await request.json()) as ContactPayload;

  if (!body.name?.trim() || !body.contact?.trim() || !body.message?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  // ponytail: mocked — no email/notification service wired up yet, owner
  // will configure real delivery (Resend or similar) later.
  console.log("Contact form submission:", body);

  return NextResponse.json({ ok: true });
};
