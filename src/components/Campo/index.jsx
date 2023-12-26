import "./Campo.css";
import PropTypes from "prop-types";

export const Campo = ({
  type = "text",
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
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

Campo.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  obrigatorio: PropTypes.bool,
  valor: PropTypes.string,
  aoAlterado: PropTypes.func,
  type: PropTypes.string,
};
