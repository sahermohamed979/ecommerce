import axios, { AxiosRequestConfig } from "axios";

export async function forgetPasswordRequest(data: { email: string }) {
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
