
// fazer os imports

import { createContext, useState } from "react";


//criar o context

export const FellowshipDrinksContext = createContext([]);



// criar o provider

export const FellowshipDrinksProvider = ({ children }) => {
    const [fellowshipDrinks, setFellowshipDrinks] = useState([]);

    // criar lógica para adicionar
    const addToFellowship = (item) => {
        setFellowshipDrinks([...fellowshipDrinks, item])
    }

    // criar lógica para remover
    const removeToFellowship = (item) => {
        const newFellowship = fellowshipDrinks.filter((itemOnFellowship) => itemOnFellowship.name !== item.name);
        setFellowshipDrinks(newFellowship)
    }

    console.log(fellowshipDrinks)

    return (
        <FellowshipDrinksContext.Provider value={{ fellowshipDrinks, addToFellowship, removeToFellowship }} >
            {children}
            {console.log('filho', children)}
        </FellowshipDrinksContext.Provider>
    )
};

export default FellowshipDrinksProvider;