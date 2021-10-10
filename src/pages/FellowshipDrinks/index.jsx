import Navbar from "../../components/Navbar";
import ProductsList from "../../components/ProductsList";
import { FellowshipDrinksContext } from "../../providers/fellowshipDrinks";

const FellowshipDrinksPage = () => {
  console.log(FellowshipDrinksContext);

  return (
    <section>
      <Navbar />
      <ProductsList type="fellowship" />
    </section>
  );
};

export default FellowshipDrinksPage;
