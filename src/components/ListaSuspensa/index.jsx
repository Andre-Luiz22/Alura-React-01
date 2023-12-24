import "./listaSuspensa.css";
import PropTypes from "prop-types";
export const ListaSuspensa = ({ label, items, obrigatorio }) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select required={obrigatorio}>
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

ListaSuspensa.propTypes = {
  label: PropTypes.string,
  items: PropTypes.array,
  obrigatorio: PropTypes.bool,
};
