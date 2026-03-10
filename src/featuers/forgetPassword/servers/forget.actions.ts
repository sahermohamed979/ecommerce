import axios, { AxiosRequestConfig } from "axios";
import { schemaEmail, schemaPassword } from "../schema/schemaPassword";

export async function forgetPasswordRequest(data: { email: string }) {
  const validationResult = schemaEmail.safeParse(data);
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

  try {
    const option: AxiosRequestConfig = {
      method: "POST",
      url: "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
      data: {
        email: data.email,
      },
    };
    const { data: responseData } = await axios(option);
    return responseData;
  } catch (error) {
    throw error;
  }
}

export async function verifyResetCodeRequest(data: { resetCode: string }) {
  try {
    const option: AxiosRequestConfig = {
      method: "POST",
      url: "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
      data: {
        resetCode: data.resetCode,
      },
    };
    const { data: responseData } = await axios(option);
    return responseData;
  } catch (error) {
    throw error;
  }
}

export async function resetPasswordRequest(data: {
  email: string;
  newPassword: string;
}) {


 const validationResult = schemaPassword.safeParse(data);
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
  try {
    const option: AxiosRequestConfig = {
      method: "PUT",
      url: "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
      data: {
        email: data.email,
        newPassword: data.newPassword,
      },
    };
    const { data: responseData } = await axios(option);
    return responseData;
  } catch (error) {
    throw error;
  }
}
