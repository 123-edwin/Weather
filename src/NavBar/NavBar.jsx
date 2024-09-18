import PropTypes from "prop-types";
import Climita from "../media/Climita.png"; // Importa la imagen del logo
import "./NavBar.css"; // Importa el archivo de estilos

export function Navbar({ input, setInput, setPlace }) {
  const handleSubmit = (e) => {
    e.preventDefault(); //Evita que la página se recargue automáticamente
    setPlace(input); //Guarda el valor del input en el estado
  };

  return (
    <header className="header-bar">
      <img className="imgLogo" src={Climita} alt="Logo de la app" />

      <form onSubmit={handleSubmit}>
        <ul className="nav-links">
          <li>
            <input
              className="inputSet"
              type="text"
              id="s"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Buscar"
            />
          </li>
          <li>
            <button
              className="buttonSet"
              type="submit"
              onClick={() => setPlace(input)}
            >
              Buscar
            </button>
          </li>
        </ul>
      </form>
    </header>
  );
}

Navbar.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  setPlace: PropTypes.func.isRequired,
};
