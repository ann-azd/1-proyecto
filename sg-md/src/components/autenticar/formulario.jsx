import contrasena from "assets/contrasena.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/store";
import { useActions } from "../../hooks/usersActions";
import { toast } from "react-hot-toast";

function Formulario() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    defaultValues: {},
  });
  const navigate = useNavigate();
  const disptach = useAppDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const usuario = watch("usuario");
  const contra = watch("contra");
  const userLogin = useAppSelector((state) => state.usuarios);
  const { error, loading, userInfo } = userLogin;

  const IniciarSesion = async (data, event) => {
    // try {
    //   const { usuario, contra } = data;
    //   //  e.preventDefault();
    //   await disptach(login(usuario, contra));
    // } catch (error) {
    //   // Maneja cualquier error que pueda ocurrir durante la acción de login
    //   console.error("Error al iniciar sesión:", error);
    // }

    const { usuario, contra } = data;
    event.preventDefault();
    await disptach(login(usuario, contra));
    console.log("Despues del dispatch " + error);
    setIsLoggedIn(true);

    if (error) {
      toast.error("Usuario inválido");
    }
    // console.log(userInfo + " despues de despachar simplemente " + loading);
    // console.log(userInfo + localStorage.getItem('userInfo'));
    // aqui recupero los datos y valido si el usuario y contrasena estan bien
  };

  // const useSelector = useAppSelector();
  const { logout, login } = useActions();

  const path1 = "/vd";
  const path2 = "/secretaria";
  useEffect(() => {
    console.log("Entra al use");
    console.log(userInfo);
    if (userInfo) {
      if (userInfo.categoria === "secretaria") navigate(path2);
      else if (userInfo.categoria === "vicedecano") navigate(path1);
      // setIsLoggedIn(true);
      console.log(userInfo.categoria);
    }
    if (error) {
      toast.error("Usuario inválido");
      console.log("Error");
    }
  }, [userInfo, error]);
  // handleSubmit = (e) => {
  //   // e.preventDefault();
  //   // disptach(login(user_name, password));
  // };

  const validateUsuario = (value) => {
    const trimmedValue = value.trim();
    if (trimmedValue.length === 0) {
      return "Campo obligatorio";
    }
    if (trimmedValue.length < 2) {
      return "Longitud <  2";
    }
    if (trimmedValue.length > 20) {
      return "Longitud >  20";
    }
    return true;
  };
  const validateContrasena = (value) => {
    const trimmedValue = value.trim();
    console.log(trimmedValue);

    if (trimmedValue.length === 0) {
      return "Campo obligatorio";
    }
    if (trimmedValue.length < 2) {
      return "Longitud <  2";
    }
    if (trimmedValue.length > 20) {
      return "Longitud >  20";
    }
    return true;
  };

  return (
    <div
      className="  mr-auto ml-auto w-auto px-6 pt-6 max-w-lg min-w-sm  rounded-xl my-5  border-slate-200 border-2 
shadow-md shadow-neutral-500  bg-slate-100 bg-opacity-60 min-h-4/5
"
    >
      <img src={contrasena} width={100} alt="" className="  ml-auto mr-auto " />

      <h2 className="mr-auto ml-auto text-center text-xl text-teal-900">
        Iniciar Sesión
      </h2>
      <form
        className="w-full max-w-md min-h-76 "
        onSubmit={handleSubmit(IniciarSesion)}
      >
        <label className="block">
          <span className="text-gray-900">Usuario</span>
          <input
            type="text"
            // onChange={(e) => setUserName(e.target.value)}
            id="user_name"
            name="user_name"
            {...register("usuario", {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: {
                value: /^[a-z]*$/,
                message:
                  "No puede tener mayúsculas, espacios intermedios o números",
              },
            })}
            className="mt-1 block w-full bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2"
            placeholder="Juan Gómez"
          />

          <p className="text-red-800">
            {errors.usuario &&
              errors.usuario.type === "required" &&
              "Campo obligatorio"}{" "}
          </p>
          {/* {errors.usuario && errors.usuario.type === "required" && 
            <span>"Campo obligatorio"</span>
          } */}

          <p className="text-red-800">
            {errors.usuario &&
              errors.usuario.type === "minLength" &&
              "Longitud < 3"}
          </p>
          <p className="text-red-800">
            {errors.usuario &&
              errors.usuario.type === "maxLength" &&
              "Longitud > 20"}
          </p>
          <p className="text-red-800">
            {errors.usuario &&
              errors.usuario.type === "pattern" &&
              errors.usuario.message}
          </p>

          {/* {errors.usuario && (
            <p className="text-red-800">{errors.usuario.message}</p>
            <p className="text-red-800">{errors.usuario.type}</p>
          )} */}
        </label>

        <label className="block">
          <span className="text-gray-900">Contraseña</span>
          <input
            type="password"
            {...register("contra", {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: {
                value: /^[a-z]*$/,
                //^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
                message: "No puede tener mayúsculas ni espacios intermedios",
              },
            })}
            className="mt-1 block w-full bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2"
            placeholder="**********"
          />

          <p className="text-red-800">
            {errors.contra &&
              errors.contra.type === "required" &&
              "Campo obligatorio"}{" "}
          </p>

          <p className="text-red-800">
            {errors.contra &&
              errors.contra.type === "minLength" &&
              "Longitud < 8"}
          </p>
          <p className="text-red-800">
            {errors.contra &&
              errors.contra.type === "maxLength" &&
              "Longitud > 20"}
          </p>
          <p className="text-red-800">
            {errors.contra &&
              errors.contra.type === "pattern" &&
              errors.contra.message}
          </p>

          {/* {errors.usuario && (
            <p className="text-red-800">{errors.usuario.message}</p>
            <p className="text-red-800">{errors.usuario.type}</p>
          )} */}
        </label>

        {/* <label className="block">
          <span className="text-gray-900">Categoría</span>
          <select
            className="block w-full mt-1 bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2 text-teal-900
          "
            name="name"
          >
            <option>Estudiante</option>
            <option>Secretaria</option>
            <option>Vicedecano</option>
          </select>
        </label> */}
        {/* <Link */}
        {/*  to={"/"} */}
        <button
          className=" text-slate-100 w-32 h-10 mt-3 mr-auto ml-auto block
          rounded-lg hover:bg-cyan-600 transition duration-200 ase-in-out
          bg-blue-500 shadow-lg shadow-blue-500/50 pl-3 pt-1 mb-6"
        >
          {" "}
          Iniciar Sesión
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
}
export default Formulario;
