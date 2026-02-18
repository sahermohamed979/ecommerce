import ProductInfo from "../components/prductInfo";
import Reviews from "../components/reviwes";
import { getSingle } from "../servers/productdetails.server";

interface ProductDetailsScreenProps {
  id: string;
}

export default async function ProductDetailsScreen({
  id,
}: ProductDetailsScreenProps) {
  const response = await getSingle({ id }); 

  return (
    <>
      <ProductInfo product={response} />
      <Reviews />
    </>
  );
}
