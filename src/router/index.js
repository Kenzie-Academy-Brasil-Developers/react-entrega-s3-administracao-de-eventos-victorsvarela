import { Switch, Route } from "react-router-dom"
import FellowshipDrinksPage from "../pages/FellowshipDrinks"
import GraduationDrinksPage from "../pages/GraduationDrinks"
import Home from "../pages/Home"
import WeddingDrinksPage from "../pages/WeddingDrinks"

const Routes = () => {

    return (

        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/graduation-drinks'>
                <GraduationDrinksPage />
            </Route>
            <Route path='/fellowship-drinks'>
                <FellowshipDrinksPage />
            </Route>
            <Route pat='/wedding-drinks'>
                <WeddingDrinksPage />
            </Route>
        </Switch>
    )
}

export default Routes