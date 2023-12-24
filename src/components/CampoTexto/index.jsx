import "./CampoTexto.css";
import PropTypes from "prop-types";

export const CampoTexto = ({
  label,
  placeholder,
  obrigatorio,
  valor,
  aoAlterado,
}) => {
  // let valor = "";
  const aoDigitado = (e) => {
    aoAlterado(e.target.value);
  };
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

CampoTexto.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  obrigatorio: PropTypes.bool,
  valor: PropTypes.string,
  aoAlterado: PropTypes.func,
};
