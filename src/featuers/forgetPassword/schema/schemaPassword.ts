import { z } from "zod";

export const schemaEmail = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .pipe(z.email("Invalid email address")),
});

export type schemaEmailValues = z.infer<typeof schemaEmail>;

export const schemaPassword = z.object({
  newPassword: z.string().nonempty("Password is required"),
});
export type schemaPasswordValues = z.infer<typeof schemaPassword>;
