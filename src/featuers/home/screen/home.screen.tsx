import Slider from "../components/slider";
import List from "../components/list";
import Sale from "../components/ui/sale";
import FeaturedProducts from "../../proudect/components/Featured.Products";
import Subscribe from "../components/subscribe";
import Category from "../components/Category";

export default function HomeScreen() {
  return (
    <>
      <Slider />
      <List />
      <Category />
      <Sale />

      <FeaturedProducts />
      <Subscribe />
    </>
  );
}
