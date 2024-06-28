import "./Colaborador.css"
import { IoIosCloseCircle } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Colaborador = ( { id, nome, cargo, imagem, corDeFundo, aoDeletar, favorito, aoFavoritar }) => {

    function favoritarColaborador() {
        aoFavoritar(id);
    }

    const propsFavorito = {
        size: 22,
        onClick: favoritarColaborador,
        cursor: "pointer"
    }

    return (
        <div className="colaborador">
            <IoIosCloseCircle 
                size={ 20 } 
                className="deletar" 
                onClick={ () => aoDeletar(id) }
            />
            <div className="cabecalho" style={ { backgroundColor: corDeFundo } }>
                <img src={ imagem } alt={` Colaborador: ${ nome }`}/>
            </div>
            <div className="rodape">
                <h4>{ nome }</h4>
                <h5>{ cargo }</h5>
                <div className="favoritar">
                    {console.log(nome, favorito)}
                    {  favorito 
                        ? <FaHeart { ...propsFavorito } color="FF0000" /> 
                        : <FaRegHeart { ...propsFavorito } />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;
