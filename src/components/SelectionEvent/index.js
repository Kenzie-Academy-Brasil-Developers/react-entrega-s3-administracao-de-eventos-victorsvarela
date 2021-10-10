

const SelectionEvent = ({ Index, setEventSelect }) => {

    return (

        <select key={Index} required name='events' onChange={(e) => setEventSelect(e.target.value)}>
            <option defaultValue >Selecione um evento</option>
            <option id='fellowship' value='fellowship'>Confraternização</option>
            <option id='wedding' value='wedding'>Casamento</option>
            <option id='graduation' value='graduation'>Formatura</option>
        </select>
    )
}


export default SelectionEvent