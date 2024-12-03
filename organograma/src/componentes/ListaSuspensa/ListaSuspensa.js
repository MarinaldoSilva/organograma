import "./ListaSuspensa.css";

export const ListaSuspensa = (props)=>{
    return(
        <div className="listaSuspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.atualizarInput(evento.target.value)}>
                {props.itens.map(item=> <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

 {/*esse é outro jeito comum de ser feito {props.item.map(item => {return <option>{item}</option>})}*/}

