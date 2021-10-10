
// fazer os imports

import { createContext, useState } from "react";


//criar o context

export const GraduationDrinksContext = createContext([]);



// criar o provider

export const GraduationDrinksProvider = ({ children }) => {
    const [graduationDrinks, setGraduationDrinks] = useState([]);

    // criar lógica para adicionar
    const addToGraduation = (item) => {
        setGraduationDrinks([...graduationDrinks, item])
    }

    // criar lógica para remover
    const removeToGraduation = (item) => {
        const newGraduation = graduationDrinks.filter((itemOnGraduation) => itemOnGraduation.name !== item.name);
        setGraduationDrinks(newGraduation)
    }

    return (
        <GraduationDrinksContext.Provider value={{ graduationDrinks, addToGraduation, removeToGraduation }} >
            {children}
        </GraduationDrinksContext.Provider>
    )
};

export default GraduationDrinksProvider