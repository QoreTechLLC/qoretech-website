import { resend } from "./resend";

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return resend.emails.send({
    from: "QoreTech <admin@qoretech.dev>",
    to: "admin@qoretech.dev",
    subject: `New message from ${name}`,
    html: `<p><b>Name:</b> ${name}</p>
           <p><b>Email:</b> ${email}</p>
           <p><b>Message:</b> ${message}</p>`,
  });
}
