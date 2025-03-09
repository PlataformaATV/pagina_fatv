import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section
      id="not-found"
      className="grid justify-center items-center h-screen bg-cover text-center"
    >
      <div>
        <h1 id="errorNumber" className="font-bold block m-auto">
          404
        </h1>
        <p className="text-4xl font-semibold text-center">Oops!</p>
        <p className="mt-1 text-2xl text-gray-500 font-medium text-center">
          <br />
          Lo sentimos, página no encontrada
        </p>
        <Link to="/">
          <button
            id="volver-inicio"
            className="text-md mt-3 p-3 rounded-3xl border-2"
          >
            Volver al Inicio
          </button>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
