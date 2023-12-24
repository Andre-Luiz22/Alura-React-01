import { CampoTexto } from "../CampoTexto";
import "./formulario.css";
export const Formulario = () => {
  return (
    <section className="formulario">
      <form action="">
        <h2>Preencha os dados para cirar o card do colaborador.</h2>
        <CampoTexto label="nome" placeholder="Digite o seu nome" />
        <CampoTexto label="cargo" placeholder="Digite o seu cargo" />
        <CampoTexto label="imagem" placeholder="Informe o endereço da imagem" />
      </form>
    </section>
  );
};
