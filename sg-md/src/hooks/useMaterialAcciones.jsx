import { useAppSelector, useAppDispatch } from "./store";
import { deleteMaterialById } from "../redux/store/users/slicematerial";
import {
  addNewMaterial,
  materialRequest,
  errorAlCrear,
  establecerlista,
  finCreacion,
  updateMaterialaction,
} from "../redux/store/users/slicematerial";
import axios from "axios";

export const useMaterialAcciones = () => {
  const dispatch = useAppDispatch();
  const userLogin = useAppSelector((state) => state.usuarios);
  const { error, loading, userInfo } = userLogin;

  const removerMaterial = (id) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.delete(
        `http://127.0.0.1:8000/materiales/delete/${id}`,
        config
      );

      dispatch(deleteMaterialById(id));
    } catch (error) {
      console.log("Error al borrar");
    }
  };

  const crearMaterial =
    ({
      titulo,
      categoria,
      descripcion,
      urlimage = "mn1",
      cantidad,
      autor = "Vicedecano Admin",
      autor_image = "admin",
    }) =>
    async (dispatch) => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `http://127.0.0.1:8000/materiales/post/`,
        {
          titulo: titulo,
          categoria: categoria,
          cantidad: cantidad,
          descripcion: descripcion,
        },
        config
      );

      dispatch(
        addNewMaterial({
          titulo,
          categoria,
          descripcion,
          urlimage,
          cantidad,
          autor,
          autor_image,
        })
      );
    };

  const crearMaterial2 = (formData) => async (dispatch) => {
    try {
      dispatch(materialRequest({}));

      console.log(formData + "sd");

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        "http://127.0.0.1:8000/materiales/post/",
        formData,
        config
      );

      console.log(data);
      dispatch(addNewMaterial({ data }));
      // dispatch(finCreacion());
    } catch (error) {
      console.log("Erooooor");

      dispatch(
        errorAlCrear(
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message
        )
      );
    }
  };


  const updateMaterial = (formData,id) => async (dispatch) => {
    try {
      dispatch(materialRequest({}));

      console.log(formData + "sd");

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `http://127.0.0.1:8000/materiales/put/${id}/`,
        formData,
        config
      );

      console.log(data);
      dispatch(updateMaterialaction({ data }));
      // dispatch(finCreacion());
    } catch (error) {
      console.log("Erooooor");

      dispatch(
        errorAlCrear(
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message
        )
      );
    }
  };






  const listarMateriales = () => async (dispatch) => {
    try {
      dispatch(materialRequest({}));

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(
        `http://127.0.0.1:8000/materiales/get/`,
        config
      );

      dispatch(establecerlista({ data }));

      // dispatch({
      //   type: BLOG_LIST_SUCCESS,
      //   payload: data,
      // });
    } catch (error) {
      dispatch(
        errorAlCrear(
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message
        )
      );
    }
  };

  return { removerMaterial,updateMaterial, crearMaterial, crearMaterial2, listarMateriales };
};

// import { useAppSelector, useAppDispatch } from "./store";
// import {deleteMaterialById, MaterialId} from '../redux/store/users/slice'
// import { addNewMaterial, Material } from "../redux/store/users/slice";

// export const useMaterialAcciones=()=>{
//   const dispatch = useAppDispatch();

//   const removerMaterial = (id: MaterialId) => {
//     dispatch(deleteMaterialById(id));
//   };

//   const crearMaterial = ({title, category, description, imageUrl, author}:Material) => {
//     dispatch(
//       addNewMaterial({ title, category, description, imageUrl, author })
//     );
//   };

//   return { removerMaterial, crearMaterial };
// };
