import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email richiesta" }),
  password: z.string().min(1, { message: "Password richiesta" }),
});
