// 'use client';

import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
  Badge,
} from "@tremor/react";
import React from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks/store";
import { useMaterialAcciones } from "../../../hooks/useMaterialAcciones";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import CrearMaterial from "./CrearMaterial";
import Dialogo from "./Dialogo";

// import {deleteMaterialById, MaterialId} from '../../redux/store/users/slice'

const posts2 = [
  {
    titulo: "Tabletas electrónicas",
    categoria: "Tecnología",
    descripcion: "Dispositivos portátiles con funciones de móvil y computadora",
    urlimage: "mn1",
    cantidad: "3243",
    autor: "Vicedecano Admin",
    autor_image: "admin",
  },

  {
    titulo: "Teclados",
    categoria: "Tecnología",
    descripcion:
      "Teclado: escribe, navega, controla y personaliza tu ordenador fácilmente",
    urlimage: "mn2",
    cantidad: "3243",
    autor: "Vicedecano Admin",
    autor_image: "admin",
  },

  {
    titulo: "Memorias USB marca ADATA",
    categoria: "Tecnología",
    descripcion:
      "Memoria USB: almacena, transfiere y protege tus datos fácilmente.",
    urlimage: "mn4",
    cantidad: "3243",
    autor: "Vicedecano Admin",
    autor_image: "admin",
  },

  {
    titulo: "Calculadoras Científicas",
    categoria: "Artículo básico",
    descripcion: "Aparato que realiza operaciones matemáticas avanzadas.",
    urlimage: "mn2",
    cantidad: "3243",
    autor: "Vicedecano Admin",
    autor_image: "admin",
  },
  {
    titulo: "Lápices",
    categoria: "Artículo básico",
    descripcion:
      "Lápices: escribe, dibuja, borra y crea con facilidad y precisión.",
    urlimage: "mn5",
    cantidad: "3243",
    autor: "Vicedecano Admin",
    autor_image: "admin",
  },
  {
    titulo: "Agendas 2024",
    categoria: "Artículo básico",
    descripcion:
      "Agenda: planifica, organiza, recuerda y gestiona tu tiempo eficientemente.",
    urlimage: "mn6",
    cantidad: "3243",
    autor: "Vicedecano Admin",
    autor_image: "admin",
  },
];

const data = [
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
];

function ListaUsuarios(props) {
 
  // const [showCrearMaterial, setShowCrearMaterial] = useState(false);
  // const [estadoId, setId] = useState(null);
  const materlialState = useAppSelector((state) => state.materiales); //hasta ahora funciona
  const { error, loading, listMaterial: posts } = materlialState;
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [dataToSubmit, setDataToSubmit] = useState(null);
  const { removerMaterial, listarMateriales } = useMaterialAcciones();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // console.log("Entra dos ");
    dispatch(listarMateriales());
  }, [dispatch]);
  // const handleRemoveUser=(id:MaterialId) =>{
  //   dispatch(deleteMaterialById(id));
  // }
  // setShowCrearMaterial(false);
   const handleConfirm = async () => {
    setShowConfirmDialog(false);
 await dispatch(removerMaterial(dataToSubmit));

   }
    const handleCancel = () => {
      setShowConfirmDialog(false);
      // setEstadoDialgo(false);
    };

    const Eliminar =(id)=>{
      setDataToSubmit(id);
     setShowConfirmDialog(true);

    }




  const handleClick = (id) => {
    // setShowCrearMaterial(true);
    props.actualizarEstado(2, id);
    // setId(id);
  };

 

  return (
    <>
      {/* {showCrearMaterial ? (
        <CrearMaterial id={estadoId} />
      ) : ( */}
      <Card className="">
        <Title className="md:text-3xl text-xl text-center ">
          Administrar materiales docentes
          <Badge className="tremor-Badge-root w-max flex-shrink-0 inline-flex justify-center items-center cursor-default text-blue-700 bg-blue-100 rounded-full px-2.5 py-0.5 text-sm ml-3">
            {posts.length}
          </Badge>
        </Title>
        <Table className="mt-8 w-10/12 ml-auto mr-auto border-2 border-zinc-400 bg-neutral-300 rounded-lg ">
          <TableHead className="bg-cyan-700 ">
            <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong text-gray-100">
                ID
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong text-gray-100">
                Imagen Producto
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong text-gray-100">
                Nombre producto
              </TableHeaderCell>

              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong text-gray-100">
                Categoría
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong text-gray-100 ">
                Descripción
              </TableHeaderCell>
              <TableHeaderCell className=" text-tremor-content-strong dark:text-dark-tremor-content-strong text-gray-100">
                Autor
              </TableHeaderCell>
              <TableHeaderCell className=" text-tremor-content-strong dark:text-dark-tremor-content-strong text-gray-100">
                Estatus
              </TableHeaderCell>
              <TableHeaderCell className=" text-tremor-content-strong dark:text-dark-tremor-content-strong text-gray-100">
                Cantidad
              </TableHeaderCell>
              <TableHeaderCell className=" text-tremor-content-strong dark:text-dark-tremor-content-strong text-gray-100">
                Acciones
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post, index) => (
              <TableRow
                key={post.id}
                className=" hover:bg-gradient-green-white   transition duration-300 ease-in-out "
              >
                <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {index + 1}
                </TableCell>
                <TableCell className=" min-w-12 max-w-14 w-14 overflow-auto whitespace-normal ">
                  <img
                    className="rounded-lg "
                    // src={require(`../../../assets/${post.urlimage}.png`)}
                    src={`http://127.0.0.1:8000${post.urlimage}`}
                    alt=""
                  />
                </TableCell>
                <TableCell className=" min-w-20 max-w-20 w-20  overflow-auto whitespace-normal ">
                  {post.titulo}
                </TableCell>
                <TableCell className=" min-w-4  w-12 max-w-12 overflow-auto whitespace-normal ">
                  {post.categoria}
                </TableCell>
                <TableCell className=" min-w-40 max-w-48 overflow-auto whitespace-normal ">
                  {post.descripcion}
                </TableCell>
                <TableCell className="min-w-16 max-w-36 overflow-auto whitespace-normal flex items-center">
                  <img
                    className="rounded-lg w-10 mr-1"
                    src={`http://127.0.0.1:8000${post.autor_image}`}
                    alt=""
                  />
                  {post.autor}
                </TableCell>

                <TableCell
                  className={`min-w-20 max-w-20 overflow-auto font-bold text-lg ${
                    post.categoria === "Tecnología"
                      ? "text-red-900"
                      : "text-lime-700"
                  } `}
                >
                  {post.categoria === "Tecnología" ? "Pago" : "Gratis"}
                </TableCell>
                <TableCell className="min-w-20 max-w-20 overflow-auto  flex items-center">
                  {post.cantidad} {/* aquiiiiiiiiiiiii coger la cantidad */}
                </TableCell>
                <TableCell className="min-w-max max-w-24 overflow-auto">
                  <button
                    type="button"
                    // onClick={() => {
                    //   dispatch(removerMaterial(post.id));
                    // }}
                    onClick={() => handleClick(post.id)}
                  >
                    <svg
                      aria-label="Editar element"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => Eliminar(post.id)}
                    className="ml-2 "
                  >
                    <svg
                      aria-label="Remove element"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      {/* )} */}
      <Dialogo
        isOpen={showConfirmDialog}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        tipo="eliminar"
      />
    </>
  );
}
const mapStateToProps = () => ({}); //se supone que dentor de parentisis va state

export default connect(mapStateToProps, {})(ListaUsuarios);
