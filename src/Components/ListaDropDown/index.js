import "./DropDown.css"

const DropDown = (props) => {
    return (
        <div className="drop-down">
            <label>{ props.label }</label>  
            <select onChange={ evento => props.aoAlterado(evento.target.value) } value={ props.valor } required={ props.obrigatorio }>
                <option disabled />
                { props.itens.map(item => {
                    return <option key={ item }>{ item }</option>
                }) }
            </select>
        </div>
    )
}

export default DropDown;
