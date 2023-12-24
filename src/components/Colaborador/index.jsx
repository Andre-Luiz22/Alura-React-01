import "./colaborador.css";
import PropTypes from "prop-types";

export const Colaborador = ({ nome, imagem, cargo, corCard }) => {
  return (
    <div className="colaborador">
      <div style={{ backgroundColor: corCard }} className="cabecalho">
        <img src={imagem} alt="Imagem do colaborador" />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

Colaborador.propTypes = {
  nome: PropTypes.string,
  imagem: PropTypes.string,
  cargo: PropTypes.string,
  corCard: PropTypes.string,
};
