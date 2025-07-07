import { prisma } from "@/lib/middleware/db";
import { EnquirySchema } from "@/lib/validations/enquiry.schema";

export async function POST(req) {
  const body = await req.json();
  const { captcha, ...formData } = body;

  if (!captcha) {
    return new Response(JSON.stringify({ error: "Captcha token is missing" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${captcha}`;

  const response = await fetch(verificationUrl, { method: "POST" });
  const data = await response.json();

  if (!data.success) {
    return new Response(
      JSON.stringify({ error: "Failed captcha verification" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const parsed = EnquirySchema.safeParse(formData);
  if (!parsed.success) {
    return new Response(JSON.stringify({ errors: parsed.error.format() }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const enquiry = await prisma.enquiry.create({
      data:{
        ...parsed.data,
      }
    });
    return new Response(
      JSON.stringify({ message: "Enquiry recieved sucessfully", enquiry }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.log("DB error", error);
    return new Response(
      { error: "Failed to save enquiry" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
