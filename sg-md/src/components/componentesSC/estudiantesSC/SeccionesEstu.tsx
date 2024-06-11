import { useState } from "react";
import TablaEstudiantes from "./TablaEstudiantes";
import CreateNuevoEstudiante from "./CreateNuevoEstudiante";
import { useAppSelector, useAppDispatch } from "../../../hooks/store";

function SeccionesInv() {
  const [ultimo, setUltimo] = useState<number | null>(1);

  const actualizarEstado = (nuevoValor: number | null) => {
    setUltimo(nuevoValor);
  };
  const userLogin = useAppSelector((state) => state.usuarios);
  const { error, loading, userInfo } = userLogin;
  console.log(userInfo.categoria + " dentro de materialesSC");

  return (
    <div className="bg-gradient-to-b from-lime-100 to-transparent">
      <ul className="flex bg-gradient-to-b from-lime-300 to-transparent ">
        <li className="flex mr-1">
          <button
            className="text-center block border border-green-500 rounded py-2 px-4 bg-green-500 hover:bg-green-700 text-white"
            onClick={() => actualizarEstado(1)}
          >
            Tabla de estudiantes
          </button>
        </li>
        <li className="flex mr-1">
          <button
            className="text-center block border border-green-500 rounded py-2 px-4 bg-green-500 hover:bg-green-700 text-white"
            onClick={() => actualizarEstado(2)}
          >
            Insertar estudiante
          </button>
        </li>
        <li className="text-center flex">
          <button className="block py-2 px-4 text-gray-600 cursor-not-allowed">
            Más opciones próximamente
          </button>
        </li>
      </ul>

      {ultimo === 1 && <TablaEstudiantes />}
      {ultimo === 2 && <CreateNuevoEstudiante />}
    </div>
  );
}
export default SeccionesInv;
