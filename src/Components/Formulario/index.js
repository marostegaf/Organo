import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import DropDown from "../ListaDropDown";
import "./Formulario.css"

const Formulario = (props) => {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [equipe, setEquipe] = useState("")

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            equipe
        })
        setNome("")
        setCargo("")
        setImagem("")
        setEquipe("")
    }

    return (
        <section className="formulario">
            <form onSubmit={ aoSalvar }>
                <h2>Dados do colaborador</h2>
                <CampoTexto 
                    obrigatorio={ true } 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={ nome }
                    aoAlterado={ valor => setNome(valor) }
                />
                <CampoTexto 
                    obrigatorio={ true }
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={ cargo }
                    aoAlterado={ valor => setCargo(valor) }
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={ imagem }
                    aoAlterado={ valor => setImagem(valor) }
                />
                <DropDown 
                    obrigatorio={ true } 
                    label="Equipe" 
                    itens={ props.equipes }
                    valor = { equipe }
                    aoAlterado={ valor => setEquipe(valor) }
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}   

export default Formulario;
