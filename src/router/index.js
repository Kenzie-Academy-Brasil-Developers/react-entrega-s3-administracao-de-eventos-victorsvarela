import { Switch, Route } from "react-router"
import FellowshipDrinksPage from "../pages/FellowshipDrinks"
import GraduationDrinksPage from "../pages/GraduationDrinks"
import Home from "../pages/Home"
import WeddingDrinksPage from "../pages/WeddingDrinks"

const Routers = () => {

    return (

        <Switch>
            <Route exact path='/'>
                <Home />
                <p>oi</p>
            </Route>
            <Route exact path='/graduation-drinks'>
                <GraduationDrinksPage />
            </Route>
            <Route exact path='/fellowship-drinks'>
                <FellowshipDrinksPage />
            </Route>
            <Route exact path='/wedding-drinks'>
                <WeddingDrinksPage />
            </Route>
        </Switch>
    )
}

export default Routers