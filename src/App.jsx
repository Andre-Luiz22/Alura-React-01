import { useState } from "react";
import { Banner } from "./components/Banner";
import { Formulario } from "./components/Formulario";
import { Time } from "./components/Time";
import { Rodape } from "./components/rodape";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57c268",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82cffa",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#a6d157",
    },
    {
      id: uuidv4(),
      nome: "DevOps",
      cor: "#e06869",
    },
    {
      id: uuidv4(),
      nome: "Ux e Design",
      cor: "#d86ebf",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#ffba05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#ff8a29",
    },
  ]);
  function delatarColaborador(id) {
    setColaboradosre(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(newTime) {
    setTimes([...times, { ...newTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradosre(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  }

  const [colaboradores, setColaboradosre] = useState([]);
  const aoNovoColaboradoAdicionado = (colaborador) => {
    setColaboradosre([...colaboradores, colaborador]);
  };

  return (
    <>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradoAdicionado(colaborador)
        }
        times={times.map((time) => time.nome)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nomeTime={time.nome}
          cor={time.cor}
          id={time.id}
          aoFavoritar={resolverFavorito}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.listaSuspensa === time.nome
          )}
          aoDeletar={delatarColaborador}
          mudarCor={mudarCorTime}
        />
      ))}

      <Rodape />
    </>
  );
}

export default App;
