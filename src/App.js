import { useState } from 'react';
import Banner from './Components/Banner/Banner.js';
import Formulario from './Components/Formulario/index.js';
import Equipe from './Components/Equipe/index.js';
import Rodape from './Components/Rodape/index.js';

function App() {

  const equipes = [
    {
      nome: "Front-End",
      corPrimaria: "#E8F8FF",
      corSecundaria: "#82CFFA"
    },
    {
      nome: "Back-End",
      corPrimaria: "#FAE9F5",
      corSecundaria: "#DB6EBF"
    },
    {
      nome: "Full-Stack",
      corPrimaria: "#F0F8E2",
      corSecundaria: "#A6D157"
    },
    {
      nome: "Data Science",
      corPrimaria: "#D9F7E9",
      corSecundaria: "#57C278"
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario equipes={ equipes.map(nomeDaEquipe => nomeDaEquipe.nome) } aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador) }/>

      { equipes.map(equipe => (
        <Equipe 
          key={ equipe.nome } 
          nome={ equipe.nome } 
          corPrimaria={ equipe.corPrimaria } 
          corSecundaria={ equipe.corSecundaria } 
          colaboradores={ colaboradores.filter(colaborador => colaborador.equipe === equipe.nome) }
        />) 
        ) 
      }
      <Rodape />
    </div>
  );
}

export default App;
