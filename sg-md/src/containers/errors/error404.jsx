import { useNavigate } from "react-router-dom";
function Error404() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navega hacia atrás en el historial del navegador
  };
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gradient-to-r from-blue-900 to-blue-100">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-5xl font-bold">404</h1>
        <p className="text-gray-600">
          Oops! Ha entrado a un elence que no existe en el sitio
        </p>

        <button
          className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          onClick={handleGoBack}
        >
          Regresar a página anterior
        </button>
      </div>
    </div>
  );
}
export default Error404;
