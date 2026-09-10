import "./index.scss";
import { Link } from "react-router-dom";

export default function Formulario() {
  function passou() {
    alert("Passou pelo campo");
  }

  function digitou(e) {
    let novovalor = e.target.value;
    alert("Digitou: " + novovalor);
  }

  return (
    <div>
      <section className="secao">
        <h1 onMouseMove={passou}>INSCRIÇÃO</h1>

        <div className="form">
          <label for="nome">Nome:</label>
          <input
            onChange={digitou}
            type="text"
            placeholder="Digite seu nome"
          ></input>
          <label for="email">Email:</label>
          <input
            onChange={digitou}
            type="text"
            placeholder="Digite seu email"
          ></input>
          <label>Estado:</label>
          <select onChange={digitou}>
            <option value="São Paulo">São Paulo</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Minas Gerais">Minas Gerais</option>
          </select>

          <div className="cargo">
            <label>Cargo:</label>
            <label>
              <input
                onChange={digitou}
                type="radio"
                name="cargo"
                value={"T.I"}
              />{" "}
              T.I
            </label>
            <label>
              <input
                onChange={digitou}
                type="radio"
                name="cargo"
                value={"Marketing"}
              />{" "}
              Marketing
            </label>
            <label>
              <input
                onChange={digitou}
                type="radio"
                name="cargo"
                value={"Administrativo"}
              />{" "}
              Administrativo
            </label>
            <label>
              <input
                onChange={digitou}
                type="radio"
                name="cargo"
                value={"Outro"}
              />{" "}
              Outro
            </label>
          </div>
        </div>
      </section>
    </div>
  );
}
