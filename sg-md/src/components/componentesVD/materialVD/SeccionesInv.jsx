import { useState } from "react";
import TablaInventario from "./TablaInventario";
import CreateNuevoMaterial from "./CreateNuevoMaterial";
import CrearMaterial from "./CrearMaterial";

function SeccionesInv() {
  const [ultimo, setUltimo] = useState(1);
  const [idDA, setidDA] = useState(null);
  const [tablaInventarioKey, setTablaInventarioKey] = useState(0);

  const actualizarEstado = (nuevoValor, x) => {
    if (x) setidDA(x);
    else setidDA(null);

    setUltimo(nuevoValor);
    if (nuevoValor === 1) {
      // Si se selecciona Tabla de inventario
      setTablaInventarioKey((prevKey) => prevKey + 1); // Incrementa la key para forzar el re-montaje
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-200 to-transparent">
      <ul className="flex bg-gradient-to-b from-blue-400 to-transparent  ">
        <li className="flex mr-1">
          <button
            className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
            onClick={() => actualizarEstado(1)}
          >
            Tabla de inventario
          </button>
        </li>
        <li className="flex mr-1">
          <button
            className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
            onClick={() => actualizarEstado(2, null)}
          >
            Crear inventario
          </button>
        </li>
        <li className="text-center flex">
          <button className="block py-2 px-4 text-gray-600 cursor-not-allowed">
            Más opciones próximamente
          </button>
        </li>
      </ul>
      {ultimo === 1 && (
        <TablaInventario
          key={tablaInventarioKey}
          actualizarEstado={actualizarEstado}
        />
      )}
      {/* Usa la key aquí */}
      {ultimo === 2 && (
        <CrearMaterial actualizarEstado={actualizarEstado} id={idDA} />
      )}
    </div>
  );
}
export default SeccionesInv;
