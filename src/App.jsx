import { useState } from "react";
import { Banner } from "./components/Banner";
import { Formulario } from "./components/Formulario";
import { Time } from "./components/Time";
import { Rodape } from "./components/rodape";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57c268",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Data Science",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "DevOps",
      corPrimaria: "#e06869",
      corSecundaria: "#fde7e8",
    },
    {
      nome: "Ux e Design",
      corPrimaria: "#d86ebf",
      corSecundaria: "#fae9f5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
    },
  ];

  const [colaboradores, setColaboradosre] = useState([]);
  const aoNovoColaboradoAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradosre([...colaboradores, colaborador]);
  };
  return (
    <>
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradoAdicionado(colaborador)
        }
        times={times.map((time) => time.nome)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nomeTime={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.listaSuspensa === time.nome
          )}
        />
      ))}
      <Rodape />
    </>
  );
}

export default App;
