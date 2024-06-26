import Colaborador from "../Colaborador";
import "./Equipe.css"

const Equipe = (props) => {
    return (
        (props.colaboradores.length) > 0 ?
        <section className="equipe" style={ { backgroundColor: props.corPrimaria } }>
            <h3 style={ { borderColor: props.corSecundaria } }>{ props.nome }</h3>
            <div className="colaboradores">
                { props.colaboradores.map(
                    colaborador => <Colaborador 
                        key= { colaborador.nome }
                        nome={ colaborador.nome } 
                        cargo={ colaborador.cargo }
                        imagem={ colaborador.imagem }
                        corDeFundo={ props.corSecundaria }
                    />) }
            </div>
        </section>
        : ""
    )
}

export default Equipe;
