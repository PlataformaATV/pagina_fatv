import './NotFound.css';

function NotFound() {
  return (
    <section className="grid justify-center items-center h-screen">
      <h1 id="errorNumber" className="text-9xl font-bold ">404</h1>
      <p class="mt-1 text-4xl font-medium  text-gray-500"><br />Sorry! Página no encontrada</p>
    </section>
  );
}

export default NotFound;
