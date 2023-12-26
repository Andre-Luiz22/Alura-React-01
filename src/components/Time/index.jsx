import { Colaborador } from "../Colaborador";
import "./time.css";
import { PropTypes } from "prop-types";
import hexToRgba from "hex-to-rgba";

export const Time = ({
  nomeTime,
  cor,
  colaboradores,
  aoDeletar,
  mudarCor,
  id,
  aoFavoritar
}) => {
  return (
    colaboradores.length > 0 && (
      <section
        style={{ backgroundColor: hexToRgba(cor, "0.6") }}
        className="time"
      >
        <input
          className="input-cor"
          value={cor}
          type="color"
          onChange={(e) => mudarCor(e.target.value, id)}
        />
        <h3>{nomeTime}</h3>
        <div
          style={{
            margin: "0 auto 32px",
            backgroundColor: cor,
            width: "50px",
            height: "4px",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "fit-content",
            overflowX: "auto",
            padding: "10px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "fit-content",
              gap: "20px",
            }}
          >
            {colaboradores.map((colaborador) => {
              return (
                <Colaborador
                  key={colaborador.nome}
                  nome={colaborador.nome}
                  imagem={colaborador.imagem}
                  cargo={colaborador.cargo}
                  favorito={colaborador.favorito}
                  corCard={cor}
                  aoDeletar={aoDeletar}
                  id={colaborador.id}
                  aoFavoritar={aoFavoritar}
                />
              );
            })}
          </div>
        </div>
      </section>
    )
  );
};

Time.propTypes = {
  nomeTime: PropTypes.string,
  cor: PropTypes.string,
  colaboradores: PropTypes.array,
  aoDeletar: PropTypes.func,
  mudarCor: PropTypes.func,
  id: PropTypes.string,
  aoFavoritar: PropTypes.func
};
