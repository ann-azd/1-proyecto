import UnMaterial from "components/Materiales/UnMaterial.jsx";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector, useAppDispatch } from "../../hooks/store";
import { useState, useEffect } from "react";
import { useMaterialAcciones } from "../../hooks/useMaterialAcciones";

const posts2 = [
  {
    title: "Tabletas electrónicas",
    category: { name: "Tecnología", bandera: true },
    description: "Dispositivos portátiles con funciones de móvil y computadora",
    imageUrl: "mn1",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
      id: "dfdfgdf",
    },
  },
  {
    title: "Teclados",
    category: { name: "Tecnología", bandera: true },
    description:
      "Teclado: escribe, navega, controla y personaliza tu ordenador fácilmente",
    imageUrl: "mn3",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
      id: "dfdfgdfsdgdf",
    },
  },
  {
    title: "Memorias USB marca ADATA",
    href: "#",
    category: { name: "Tecnología", bandera: true },
    description:
      "Memoria USB: almacena, transfiere y protege tus datos fácilmente.",
    imageUrl: "mn4",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
      id: "dfdfgdfdfdg",
    },
  },
  {
    title: "Calculadoras Científicas",

    category: { name: "Artículo básico", bandera: false },
    description: "Aparato que realiza operaciones matemáticas avanzadas.",
    imageUrl: "mn2",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
      id: "dfdfghgjghdf",
    },
  },
  {
    title: "Lápices",
    href: "#",
    category: { name: "Artículo básico", bandera: false },
    description:
      "Lápices: escribe, dibuja, borra y crea con facilidad y precisión.",
    imageUrl: "mn5",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
      id: "dfdsssssfgdf",
    },
  },
  {
    title: "Agendas 2024",
    href: "#",
    category: { name: "Artículo básico", bandera: false },
    description:
      "Agenda: planifica, organiza, recuerda y gestiona tu tiempo eficientemente.",
    imageUrl: "mn6",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
      id: "dfdfhhhhgdf",
    },
  },
];

//No borrar a posts de aqui por si no funciona Redux

function MateList() {
  const materlialState = useAppSelector((state) => state.materiales);
  const { error, loading, listMaterial: posts } = materlialState;
  const dispatch = useAppDispatch();
  const {  listarMateriales } = useMaterialAcciones();
  useEffect(() => {
    // console.log("Entra dos ");
    dispatch(listarMateriales());
  }, [dispatch]);

  return (
    <div className="relative bg-gradient-to-t  from-indigo-300  to-transparent px-4 pt-11 sm:pt-28 md:pt-52 xl:pt-60 pb-20 sm:px-6 lg:px-8 lg:pt-18  lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3  sm:h-2/3 " />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Disponibilidad actual
          </h2>
          <p className="mx-auto mt-10  max-w-2xl text-xl text-gray-500 sm:mt-4">
            A continuación le proporcionamos información sobre la disponibilidad
            actual de materiales docentes en la facultad.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <UnMaterial key={post.id} id={post.id} index={index} data={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default MateList;
