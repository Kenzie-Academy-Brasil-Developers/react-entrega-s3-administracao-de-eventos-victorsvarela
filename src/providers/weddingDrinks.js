
// fazer os imports

import { createContext, useState } from "react";


//criar o context

export const WeddingDrinksContext = createContext([]);



// criar o provider

export const WeddingDrinksProvider = ({ children }) => {
    const [weddingDrinks, setWeddingDrinks] = useState([]);

    // criar lógica para adicionar
    const addToWedding = (item) => {
        setWeddingDrinks([...weddingDrinks, item])
    }

    // criar lógica para remover
    const removeToWedding = (item) => {
        const newWedding = weddingDrinks.filter((itemOnWedding) => itemOnWedding.name !== item.name);
        setWeddingDrinks(newWedding)
    }

    return (
        <WeddingDrinksContext.Provider value={{ weddingDrinks, addToWedding, removeToWedding }} >
            {children}
        </WeddingDrinksContext.Provider>
    )
};