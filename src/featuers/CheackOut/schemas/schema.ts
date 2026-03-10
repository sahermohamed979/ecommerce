import z from "zod";
const checkOutSchema = z.object({
  details: z
    .string()
    .min(1, "address is required")
    .nonempty("Address is required"),
  phone: z
    .string()
    .nonempty("Phone number is required")
    .regex(/^(\+20)?01[0125][0-9]{8}$/, "Invalid phone number")
    .nonempty("Phone number is required"),
  city: z.string().min(1, "city is required").nonempty("City is required"),
  postalCode: z
    .string()
    .min(1, "postal code is required")
    .nonempty("Postal code is required"),
});

export type CheckOutFormData = z.infer<typeof checkOutSchema>;
export default checkOutSchema;
