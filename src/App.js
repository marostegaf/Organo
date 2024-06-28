import { useState } from 'react';
import Banner from './Components/Banner/Banner.js';
import Formulario from './Components/Formulario/index.js';
import Equipe from './Components/Equipe/index.js';
import Rodape from './Components/Rodape/index.js';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [equipes, setEquipes] = useState([
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA"
    },
    {
      id: uuidv4(),
      nome: "Back-End",
      cor: "#DB6EBF"
    },
    {
      id: uuidv4(),
      nome: "Full-Stack",
      cor: "#A6D157"
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#57C278"
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "Marcos Marostega",
      cargo: "Front-End Developer",
      imagem: "http://github.com/marostegaf.png",
      equipe: equipes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Marcos Marostega",
      cargo: "Back-End Developer",
      imagem: "http://github.com/marostegaf.png",
      equipe: equipes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Marcos Marostega",
      cargo: "Full-Stack Developer",
      imagem: "http://github.com/marostegaf.png",
      equipe: equipes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Marcos Marostega",
      cargo: "Data Scientist",
      imagem: "http://github.com/marostegaf.png",
      equipe: equipes[3].nome
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial);

  const aoNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDaEquipe(cor, id) {
    setEquipes(equipes.map(equipe => {
      if(equipe.id === id) {
        equipe.cor = cor;
      }
      return equipe;
    }))
  }

  function cadastrarEquipe(novaEquipe) {
    setEquipes([...equipes, { ...novaEquipe, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        equipes={ equipes.map(nomeDaEquipe => nomeDaEquipe.nome) } 
        aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador) }
        cadastrarEquipe={ cadastrarEquipe }
        />
      { equipes.map(equipe => (
        <Equipe 
          key={ equipe.id } 
          id={ equipe.id }
          nome={ equipe.nome } 
          cor={ equipe.cor } 
          colaboradores={ colaboradores.filter(colaborador => colaborador.equipe === equipe.nome) }
          aoDeletar={ deletarColaborador }
          mudarCor={ mudarCorDaEquipe }
          aoFavoritar={ resolverFavorito }
        />))
      }
      <Rodape />
    </div>
  );
}

export default App;
