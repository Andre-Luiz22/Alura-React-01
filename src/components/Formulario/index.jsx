import { useState } from "react";
import { Botao } from "../Botao";
import { Campo } from "../Campo";
import { ListaSuspensa } from "../ListaSuspensa";
import { PropTypes } from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "./formulario.css";
export const Formulario = ({
  aoColaboradorCadastrado,
  times,
  cadastrarTime,
}) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [listaSuspensa, setListaSupensa] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");
  const aoSalvar = (e) => {
    e.preventDefault();
    aoColaboradorCadastrado({
      id: uuidv4(),
      favorito: false,
      nome,
      cargo,
      imagem,
      listaSuspensa,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setListaSupensa("");
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          obrigatorio
          label="nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio
          label="cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          obrigatorio
          label="imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio
          label="time"
          items={times}
          valor={listaSuspensa}
          aoAlterado={(valor) => setListaSupensa(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          cadastrarTime({ nome: nomeTime, cor: corTime });
          setCorTime("");
          setNomeTime("");
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio
          label="nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          type="color"
          obrigatorio
          label="cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

Formulario.propTypes = {
  aoColaboradorCadastrado: PropTypes.func,
  times: PropTypes.array,
  cadastrarTime: PropTypes.func,
};
