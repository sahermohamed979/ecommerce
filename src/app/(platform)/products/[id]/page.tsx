import ProductDetailsScreen from "@/src/featuers/produectDetails/screen/producet.details.screen";

interface ProductDetailsPageProps {
  params: { id: string };
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;
  return <ProductDetailsScreen id={id} />;
}
