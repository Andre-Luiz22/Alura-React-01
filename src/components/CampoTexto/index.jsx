import "./CampoTexto.css";
import PropTypes from "prop-types";

export const CampoTexto = ({ label, placeholder }) => {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input placeholder={placeholder} />
    </div>
  );
};

CampoTexto.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
