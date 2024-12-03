import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './Formulario.css'

export const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('') 

    const submeterDados = (evento)=>{
        evento.preventDefault();
        console.log(nome, cargo, imagem, time)
    }

    return(
        <section className="formulario">
            <form onSubmit={submeterDados}>

                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto required={true} label="Nome" placeholder ={"Digite seu nome"}
                valor={nome}
                atualizarInput={valor => setNome(valor)}
                />

                <CampoTexto required={true} label="Cargo" placeholder ={"Digite seu cargo"}
                valor={cargo}
                atualizarInput={valor => setCargo(valor)}
                />

                <CampoTexto required={true} label="Imagem" placeholder ={"Caminho CDN da imagem ou upload"}
                valor={imagem}
                atualizarInput={valor=>setImagem(valor)}

                />
                <ListaSuspensa itens={times} label="Escolas de ensino Alura" valor={time} atualizarInput={valor=>setTime(valor)}/>

                <Botao required={true}>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

