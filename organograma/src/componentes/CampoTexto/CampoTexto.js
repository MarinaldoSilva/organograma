import './CampoTexto.css'

export const CampoTexto = (props) =>{
    
    const capturarDadosUsuario = (evento)=>{
       props.atualizarInput(evento.target.value);
    }
    
    return(
        <div className="campoInput"> 
            <label >{props.label}</label>
            <input type="text"
            placeholder={props.placeholder} 
            required={props.required} 
            value={props.valor}
            onChange={capturarDadosUsuario}
             />
        </div>
    );
}




{/** import {useState} from 'react'
import './CampoTexto.css'

export const CampoTexto = (props) =>{
    
    const [valor, setValor] = useState('Marinaldo');

    const capturarDadosUsuario = (evento)=>{
        setValor(evento.target.value);
        console.log(valor)
    }
    
    return(
        <div className="campoInput"> 
            <label >{props.label}</label>
            <input type="text"
            placeholder={props.placeholder} 
            required={props.required} 
            value={valor}
            onChange={capturarDadosUsuario}
             />
        </div>
    );
}
    */}