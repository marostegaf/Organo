import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import DropDown from "../ListaDropDown";
import "./Formulario.css"

const Formulario = (props) => {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [equipe, setEquipe] = useState("")
    const [nomeEquipe, setNomeEquipe] = useState("")
    const [corEquipe, setCorEquipe] = useState("")

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

    const aoSalvarNovaEquipe = (evento => {
        evento.preventDefault()
        props.cadastrarEquipe({ nome: nomeEquipe, cor: corEquipe})
    })

    return (
        <section className="formulario">
            <form onSubmit={ aoSalvar }>
                <h2>Dados do colaborador</h2>
                <Campo 
                    obrigatorio={ true } 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={ nome }
                    aoAlterado={ valor => setNome(valor) }
                />
                <Campo 
                    obrigatorio={ true }
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={ cargo }
                    aoAlterado={ valor => setCargo(valor) }
                />
                <Campo 
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
            <form onSubmit={ aoSalvarNovaEquipe }>
                <h2>Dados da nova Equipe</h2>
                <Campo 
                    obrigatorio // Quando é TRUE não precisa colocar ={ true }
                    label="Nova equipe" 
                    placeholder="Digite o nome da equipe"
                    valor={ nomeEquipe }
                    aoAlterado={ valor => setNomeEquipe(valor) }
                />
                <Campo 
                    type="color"
                    obrigatorio
                    label="Cor"
                    placeholder="Digite a cor da equipe"
                    valor={ corEquipe }
                    aoAlterado={ valor => setCorEquipe(valor) }
                />
                <Botao>
                    Criar Equipe
                </Botao>
            </form>
        </section>
    )
}   

export default Formulario;
