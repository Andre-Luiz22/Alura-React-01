import { Colaborador } from "../Colaborador";
import "./time.css";
import { PropTypes } from "prop-types";

export const Time = ({
  nomeTime,
  corPrimaria,
  corSecundaria,
  colaboradores,
}) => {
  console.log(colaboradores);
  return (
    colaboradores.length > 0 && (
      <section style={{ backgroundColor: corSecundaria }} className="time">
        <h3>{nomeTime}</h3>
        <div
          style={{
            margin: "0 auto 32px",
            backgroundColor: corPrimaria,
            width: "50px",
            height: "4px",
          }}
        ></div>
        <div style={{ width: "100%", height: "300px", overflowX: "auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "fit-content",
              gap: "20px",
            }}
          >
            {colaboradores.map((colaborador) => (
              <Colaborador
                key={colaborador.nome}
                nome={colaborador.nome}
                imagem={colaborador.imagem}
                cargo={colaborador.cargo}
                corCard={corPrimaria}
              />
            ))}
          </div>
        </div>
      </section>
    )
  );
};

Time.propTypes = {
  nomeTime: PropTypes.string,
  corPrimaria: PropTypes.string,
  corSecundaria: PropTypes.string,
  colaboradores: PropTypes.array,
};
