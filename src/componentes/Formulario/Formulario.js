import CampoTexto from "../CampoTexto"
import './Formulario.css'

export const Formulario = () => {
    return(
        <section className="formulario">
            <form className="f">
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto label="Nome" placeholder ={"Digite seu nome"}/>
                <CampoTexto label="Cargo" placeholder ={"Digite seu cargo"}/>
                <CampoTexto label="Imagem" placeholder ={"Caminho CDN da imagem ou upload"}/>
            </form>
        </section>
    )
}

