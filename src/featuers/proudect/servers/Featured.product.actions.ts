"use server";
import axios, { AxiosRequestConfig } from "axios";
import { ProductsResponse } from "../types/index";

export async function getProducts(): Promise<ProductsResponse | undefined> {
  try {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://ecommerce.routemisr.com/api/v1/products`,
    };

    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
