import { useState } from "react";
import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import { PropTypes } from "prop-types";
import "./formulario.css";
export const Formulario = ({ aoColaboradorCadastrado, times }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [listaSuspensa, setListaSupensa] = useState("");
  const aoSalvar = (e) => {
    e.preventDefault();
    aoColaboradorCadastrado({
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
        <h2>Preencha os dados para cirar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="time"
          items={times}
          valor={listaSuspensa}
          aoAlterado={(valor) => setListaSupensa(valor)}
        />
        <Botao>Criar Cards</Botao>
      </form>
    </section>
  );
};

Formulario.propTypes = {
  aoColaboradorCadastrado: PropTypes.func,
  times: PropTypes.array,
};
