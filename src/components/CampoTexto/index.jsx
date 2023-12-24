import "./CampoTexto.css";
import PropTypes from "prop-types";

export const CampoTexto = ({ label, placeholder, obrigatorio }) => {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input required={obrigatorio} placeholder={placeholder} />
    </div>
  );
};

CampoTexto.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  obrigatorio: PropTypes.bool,
};
