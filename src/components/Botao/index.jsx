import "./botao.css";
import PropTypes from "prop-types";
export const Botao = (text) => {
  const children = text.children;
  return <button className="botao">{children}</button>;
};

Botao.propTypes = {
  text: PropTypes.element,
};
