"use server";

import { SignupFormSchema, SignupFormValues } from "../schemas/Signup.schemas";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
export default async function signupAction(values: SignupFormValues) {
  const validationResult = SignupFormSchema.safeParse(values);

  if (!validationResult.success) {
    const errors: Record<string, string> = {};

    if (validationResult.error) {
      validationResult.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        const message = issue.message;

        if (!errors[field]) {
          errors[field] = message;
        }
      });
      return { success: false, errors, message: "Validation failed" };
    }
  }

  const { terms, ...requestBody } = values;
  try {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "https://ecommerce.routemisr.com/api/v1/auth/signup",
      data: requestBody,
    };
    const { data } = await axios(options);
    if (data.message === "success") {
      return { success: true, message: "account created successfully", data };
    } else {
      return { success: false, message: data.message || "Signup failed" };
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      const ErrorMessage = error.message || "Signup failed";
      if (ErrorMessage === "Account Already Exists") {
        return {
           success: false,
            message: "Email already exists", 
          errors:{
            email:
            "Email already exists"} };
      }
    }
  }
}
