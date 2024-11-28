import './CampoTexto.css'

export const CampoTexto = valor =>{
    return(
        <div className="campoTexto"> 
                <form className="formulario">
                    <label className="nomeLabel" >{valor.label}</label>
                    <input type="text" placeholder={valor.placeholder} />
                </form>
        </div>
    );
}