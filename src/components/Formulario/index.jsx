import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import "./formulario.css";
export const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "DevOps",
    "Ux e Design",
    "Mobile",
    "Inovação e Gestão",
  ];
  const aoSalvar = (e) => {
    e.preventDefault();
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para cirar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="nome"
          placeholder="Digite o seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="cargo"
          placeholder="Digite o seu cargo"
        />
        <CampoTexto
          obrigatorio={true}
          label="imagem"
          placeholder="Informe o endereço da imagem"
        />
        <ListaSuspensa obrigatorio={true} label="time" items={times} />
        <Botao>Criar Cards</Botao>
      </form>
    </section>
  );
};
