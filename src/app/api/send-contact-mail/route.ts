export async function POST(req: Request) {
  const CONTACT_MAIL_TO_URL = process.env.CONTACT_MAIL_TO_URL;
  const TO_EMAIL = process.env.TO_EMAIL;
  const FROM_MAIL = process.env.FROM_MAIL;
  const FROM_NAME = process.env.FROM_NAME || "CUSTOMER QUERY BAK UNITED CO.";

  try {
    if (!CONTACT_MAIL_TO_URL || !TO_EMAIL || !FROM_MAIL) {
      return Response.json(
        { status: "error", message: "Contact mail configuration is not set." },
        { status: 500 }
      );
    }

    const { name, email, mobile, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { status: "error", message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("subject", subject);
    formData.append("message", message);
    formData.append("toEmail", TO_EMAIL);
    formData.append("fromEmail", FROM_MAIL);
    formData.append("fromName", FROM_NAME);

    const response = await fetch(CONTACT_MAIL_TO_URL, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { status: "error", message: "Failed to send email." },
      { status: 500 }
    );
  }
}
