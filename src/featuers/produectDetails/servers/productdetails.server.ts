"use server";
import axios, { AxiosRequestConfig } from "axios";
import { ProductDetailsResponse } from "../types";

export async function getSingle({
  id,
}: {
  id: string;
}): Promise<ProductDetailsResponse | undefined> {
  try {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
