import { z } from "zod";

export const LoginSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 character long")
    .max(30, "Username is too long")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),
  password: z
    .string()
    .min(6, "Password must be atleast 6 character long")
    .max(50, "Password is soo long"),
});
