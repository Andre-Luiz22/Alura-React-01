import "./listaSuspensa.css";
import PropTypes from "prop-types";
export const ListaSuspensa = ({
  label,
  items,
  obrigatorio,
  valor,
  aoAlterado,
}) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        value={valor}
        onChange={(e) => aoAlterado(e.target.value)}
        required={obrigatorio}
      >
        <option value="">Selecione um time</option>
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
  valor: PropTypes.string,
  aoAlterado: PropTypes.func,
};
