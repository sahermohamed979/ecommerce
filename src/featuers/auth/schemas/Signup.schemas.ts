import { z } from "zod";

// Password validation schema - exported for reuse
export const passwordSchema = z
  .string()
  .nonempty("Password is required")
  .min(8, "Password must be at least 8 characters long")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(
    /[!@#$%^&*(),.?":{}|<>]/,
    "Password must contain at least one special character",
  );

export const passwordValidationRules = {
  minLength: z.string().min(8),
  hasLowercase: z.string().regex(/[a-z]/),
  hasUppercase: z.string().regex(/[A-Z]/),
  hasNumber: z.string().regex(/[0-9]/),
  hasSpecial: z.string().regex(/[!@#$%^&*(),.?":{}|<>]/),
};

export const SignupFormSchema = z
  .object({
    name: z
      .string()
      .nonempty("Name is required")
      .min(3, "Name must be at least 3 characters long")
      .max(25, "Name must be at most 25 characters long"),
    email: z.string().nonempty("Email is required").pipe(z.email("Invalid email address")),
    password: passwordSchema,
    rePassword: z.string().nonempty("Confirm Password is required"),
    phone: z
      .string()
      .nonempty("Phone number is required")
      .regex(/^(\+20)?01[0125][0-9]{8}$/, "Invalid phone number"),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

export type SignupFormValues = z.infer<typeof SignupFormSchema>;
