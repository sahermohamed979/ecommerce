"use server";
import axios, { AxiosRequestConfig } from "axios";
import { CategoriesResponse } from "../types";

export async function getBrands(): Promise<CategoriesResponse> {
  try {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://ecommerce.routemisr.com/api/v1/brands`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    throw error;
  }
}
