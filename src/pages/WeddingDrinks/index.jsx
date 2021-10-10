import Navbar from "../../components/Navbar";
import ProductsList from "../../components/ProductsList";
import { WeddingDrinksContext } from "../../providers/weddingDrinks";

const WeddingDrinksPage = () => {
  console.log("context", WeddingDrinksContext);

  return (
    <section>
      <Navbar />
      <ProductsList type="wedding" />
    </section>
  );
};

export default WeddingDrinksPage;
