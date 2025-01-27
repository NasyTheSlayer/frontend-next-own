import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z
      .string()
      .nonempty("Username is required")
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(50, { message: "Username must be at most 50 characters long" })
      .regex(/^[a-zA-Z0-9._-]+$/, "Username is not valid"),
    email: z
      .string()
      .nonempty("Email is required")
      .max(300, { message: "Email must be at most 300 characters long" })
      .email({ message: "Email is not valid" }),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(300, { message: "Password must be at most 300 characters long" })
      .regex(/^(?=.*[A-Za-z\d@$!%_*#?&])[A-Za-z\d@$!%_*#?&]{8,}$/, {
        message: "Password is not valid",
      }),
    confirmPassword: z.string().nonempty("Configrm password is required"),
    privacyPolicy: z.literal<boolean>(true, {
      errorMap: () => ({ message: "Accept privacy policy & terms" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
