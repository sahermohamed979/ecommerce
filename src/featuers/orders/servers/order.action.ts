import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";

export async function getOrders(id: string) {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    throw error;
  }
}
