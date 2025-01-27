// libs
import { z } from "zod";
// utils
import { signUpSchema } from "@/utils/validation/signUpSchema";
import { signInSchema } from "@/utils/validation/signInSchema";

export type SignUpForm = z.infer<typeof signUpSchema>;

export type SignInForm = z.infer<typeof signInSchema>;
