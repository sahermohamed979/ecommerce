"use server";
import axios, { AxiosError } from "axios";
import { LoginFormSchema, LoginFormValues } from "../schemas/Login.Schemas";
import { setToken } from "./Auth.actions";

export default async function loginAction(values: LoginFormValues) {
  const validationResult = LoginFormSchema.safeParse(values);
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

  const { rememberMe, ...requestBody } = values;

  try {
    const options = {
      method: "POST",
      url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
      data: requestBody,
    };
    const { data } = await axios(options);
    console.log(data);
    if (data.message === "success") {
      await setToken(data.token, rememberMe ?? false);
      console.log(data);
      return { success: true, message: "Logged in successfully", data };
    } else {
      return { success: false, message: data.message || "Login failed" };
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      const ErrorMessage = error.response?.data?.message || "Login failed";

      if (ErrorMessage === "Incorrect email or password") {
        return {
          success: false,
          message: "Incorrect email or password",
          errors: {
            password: "Incorrect email or password",
          },
        };
      }
    }
  }
}
