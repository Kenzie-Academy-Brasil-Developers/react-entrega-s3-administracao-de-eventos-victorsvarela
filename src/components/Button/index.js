
import { useContext } from "react";
import { useLocation } from "react-router";
import { FellowshipDrinksContext } from "../../providers/fellowshipDrinks";
import { GraduationDrinksContext } from "../../providers/graduationDrinks";
import { WeddingDrinksContext } from "../../providers/weddingDrinks";


const Button = ({ type, item, modifierBtn }) => {
    const { fellowship, addToFellowship, removeToFellowship } = useContext(FellowshipDrinksContext)
    const { graduation, addToGraduation, removeToGraduation } = useContext(GraduationDrinksContext)
    const { wedding, addToWedding, removeToWedding } = useContext(WeddingDrinksContext)

    const location = useLocation()

    const text = modifierBtn === undefined ? 'Adicionar' : 'Remover'


    const onClickListSelect = (value) => {
        if (value === 'fellowship') {
            return addToFellowship(item)
        }
        if (value === 'graduation') {
            return addToGraduation(item)
        }
        if (value === 'wedding') {
            return addToWedding(item)
        }
        if (location.pathname === '/fellowship-drinks') {
            return removeToFellowship(item)
        }
        if (location.pathname === '/wedding-drinks') {
            return removeToWedding(item)
        }
        if (location.pathname === '/graduation-drinks') {
            return removeToGraduation(item)
        }
        console.log(value)
    }

    return (
        <button onClick={() => onClickListSelect(type)}>{text}</button>
    )

}

export default Button
