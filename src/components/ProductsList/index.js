import { useEffect, useState } from "react";
import axios from "axios";
import './style.css'
import CardProduct from "../CardProduct";
import { FellowshipDrinksContext } from "../../providers/fellowshipDrinks";
import { useContext } from "react/cjs/react.development";
import { WeddingDrinksContext } from "../../providers/weddingDrinks";
import { GraduationDrinksContext } from "../../providers/graduationDrinks";

const ProductsList = ({ type }) => {

    const [resultApi, setResultApi] = useState([]);

    const { fellowshipDrinks } = useContext(FellowshipDrinksContext)
    const { weddingDrinks } = useContext(WeddingDrinksContext)
    const { graduationDrinks } = useContext(GraduationDrinksContext)

    const callAPI = () => {
        axios.get('https://api.punkapi.com/v2/beers/')
            .then(response => setResultApi(response.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        callAPI()
    }, [])

    console.log(resultApi)

    console.log('aff', weddingDrinks)
    console.log('mds', graduationDrinks)

    return (
        <section>
            {type === 'fellowship' ? (
                <>
                    <div className='grade__products' >
                        {fellowshipDrinks.map((item, index) => (
                            <CardProduct key={index} Item={item} Index={index} Type={type} />
                        ))}
                    </div >
                </>
            ) : type === 'wedding' ? (
                <>
                    <div className='grade__products' >
                        {weddingDrinks.map((item, index) => (
                            <CardProduct key={index} Item={item} Index={index} Type={type} />
                        ))}
                    </div >
                </>
            ) : type === 'graduation' ? (
                <>
                    <div className='grade__products' >
                        {graduationDrinks.map((item, index) => (
                            <CardProduct key={index} Item={item} Index={index} Type={type} />
                        ))}
                    </div >
                </>
            ) : (
                <div className='grade__products' >
                    {resultApi.map((item, index) => (
                        <CardProduct key={index} Item={item} Index={index} />
                    ))}
                </div >

            )}
        </section>
    )
}

export default ProductsList