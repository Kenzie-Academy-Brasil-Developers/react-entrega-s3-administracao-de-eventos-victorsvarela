import { useState } from "react";
import Button from "../Button";
import SelectionEvent from "../SelectionEvent";


const CardProduct = ({ Item, Index, Type }) => {


    const [eventSelect, setEventSelect] = useState([]);



    return (
        <div className='card__product' key={Index}>
            <div>
                <figure>
                    <img className='image__product' src={Item.image_url} alt={Item.name} />
                    <figcaption>{Item.name}</figcaption>
                </figure>
            </div>
            <div>
                <p><i><strong>Fabricado em: {Item.first_brewed}</strong></i></p>
                <p>Descrição: <i>{Item.description.substr(0, 100)}...</i></p>
                <p><i><strong>Estoque: {Item.boil_volume.value}l</strong></i></p>
            </div>
            <div>
                <br />
                {Type === undefined && <SelectionEvent Index={Index} setEventSelect={setEventSelect} />}


            </div>
            <Button type={eventSelect} item={Item} modifierBtn={Type} />

        </div>
    )
}

export default CardProduct