import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  try {
    await sendContactEmail({ name, email, message });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
