"use server";
import axios, { AxiosRequestConfig } from "axios";
import { CategoriesResponse } from "../types";

export async function getCategories(): Promise<CategoriesResponse> {
  try {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://ecommerce.routemisr.com/api/v1/categories`,
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
