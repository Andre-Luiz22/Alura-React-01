import "./colaborador.css";
import PropTypes from "prop-types";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {} from "react-icons/io5";

export const Colaborador = ({
  nome,
  imagem,
  cargo,
  corCard,
  aoDeletar,
  id,
  favorito,
  aoFavoritar,
}) => {
  function favoritar() {
    aoFavoritar(id);
  }

  const propsFavorito = {
    size: 30,
    onClick: favoritar,
  };
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={30}
        className="deletar"
        onClick={() => aoDeletar(id)}
      />
      <div style={{ backgroundColor: corCard }} className="cabecalho">
        <img src={imagem} alt="Imagem do colaborador" />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="favoritar">
          {favorito ? (
            <AiFillHeart {...propsFavorito} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

Colaborador.propTypes = {
  nome: PropTypes.string,
  imagem: PropTypes.string,
  cargo: PropTypes.string,
  corCard: PropTypes.string,
  aoDeletar: PropTypes.func,
  id: PropTypes.string,
  favorito: PropTypes.bool,
  aoFavoritar: PropTypes.func,
};
