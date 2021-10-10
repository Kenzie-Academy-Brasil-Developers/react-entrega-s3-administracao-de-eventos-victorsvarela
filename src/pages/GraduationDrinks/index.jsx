import Navbar from "../../components/Navbar";
import ProductsList from "../../components/ProductsList";
import { FellowshipDrinksContext } from "../../providers/fellowshipDrinks";

const GraduationDrinksPage = () => {
  console.log(FellowshipDrinksContext);

  return (
    <section>
      <Navbar />
      <ProductsList type="graduation" />
    </section>
  );
};

export default GraduationDrinksPage;
