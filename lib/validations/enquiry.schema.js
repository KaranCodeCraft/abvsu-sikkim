import { z } from "zod";

const EnquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email").optional(),
  phone: z
    .string()
    .regex(/^\d+$/, "Phone must contain digits only")
    .min(10, "Phone must be at least 10 digits"),
  message: z
    .string()
    .max(500, "Message is too long")
    .refine((msg) => !msg.includes("http"), {
      message: "Links are not allowed in the message",
    }),
  status: z.enum(["WON","PENDING","LOST"]).optional()
});

export { EnquirySchema };
