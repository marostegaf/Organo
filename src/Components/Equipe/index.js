import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';
import "./Equipe.css"

const Equipe = (props) => {
    return (
        (props.colaboradores.length) > 0 ?
        <section className="equipe" style={ { backgroundColor: hexToRgba(props.cor, "0.6") } }>
            <input onChange={ evento => props.mudarCor(evento.target.value, props.id) } value={ props.cor } type="color" className="input-color" />
            <h3 style={ { borderColor: props.cor } }>{ props.nome }</h3>
            <div className="colaboradores">
                { props.colaboradores.map(
                    colaborador => {
                        console.log(colaborador)
                        return <Colaborador 
                        id={ colaborador.id }
                        key= { colaborador.nome }
                        nome={ colaborador.nome } 
                        cargo={ colaborador.cargo }
                        imagem={ colaborador.imagem }
                        corDeFundo={ props.cor }
                        aoDeletar={ props.aoDeletar }
                        favorito={ colaborador.favorito }
                        aoFavoritar={ props.aoFavoritar }
                    />
                    }) }
            </div>
        </section>
        : ""
    )
}

export default Equipe;
