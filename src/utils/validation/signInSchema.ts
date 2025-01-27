import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .max(300, { message: "Email must be at most 300 characters long" })
    .email({ message: "Email is not valid" }),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, { message: "Password must be at least 8 characters long" }),
});
