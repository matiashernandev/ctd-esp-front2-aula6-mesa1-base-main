/*

3.3.1 - Identificación de errores [A]

Cada vez que se muestra un mensaje de error,
debe identificarse claramente el elemento
que generó el error de forma visual y sonora (ejemplo:
cambio de color en el elemento + un icono de alerta +
un mensaje de texto).

*/

// Se debe verificar si el campo de
// el correo electrónico contiene algo escrito. Si no, debe
// marcar un error en el input.
// Para esto se puede utilizar en el input de correo electrónico el atributo "required".
import { useState } from "react";
import "./style.css";

const Email = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "") {
      setError(true);
    } else {
      alert("Muchas gracias, recibiréis noticias sobre la serie 🎉");
    }
  };

  return (
    <form>
      <label htmlFor="emailInput">Ingrese su correo:</label>
      <input
        id="emailInput"
        type="email"
        placeholder="sarasa@gmail.com"
        value={email}
        onChange={handleEmailChange}
        required
        aria-invalid={error}
        aria-describedby={error ? "emailError" : ""}
      />
      <button onClick={handleSubmit}>Enviar</button>

      {error && (
        <div id="emailError" className="error" role="alert">
          <span className="errorIcon" aria-hidden="true">
            ⚠️
          </span>
          <span className="errorMessage">
            Por favor, ingrese un correo electrónico válido.
          </span>
        </div>
      )}
    </form>
  );
};

export default Email;
