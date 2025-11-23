import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;

  try {
    const {
      toEmail,
      fromEmail,
      successMessage,
      name,
      email,
      mobile,
      subject,
      message,
      fromName,
    } = await req.json();

    console.log({
      toEmail,
      fromEmail,
      successMessage,
      name,
      email,
      mobile,
      subject,
      message,
    });

    if (!toEmail || !name || !email || !subject || !message) {
      return Response.json(
        { status: "error", message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: SMTP_USER, // Gmail address
        pass: SMTP_PASS, // Gmail App Password
      },
    });

    const mailOptions = {
      from: `"${fromName}" <${fromEmail || SMTP_USER}>`,
      to: toEmail,
      subject,
      text: `
Name: ${name}
Email: ${email}
Mobile: ${mobile || "N/A"}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({
      status: "success",
      message: successMessage || "Message sent successfully.",
    });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json(
      { status: "error", message: "Failed to send email." },
      { status: 500 }
    );
  }
}
