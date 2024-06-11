import { Button, Card, TextInput, Textarea, Title, Badge } from "@tremor/react";
// import {
//   MultiSelect,
//   MultiSelectItem,
//   SearchSelect,
//   SearchSelectItem,
//   Select,
//   SelectItem,
// } from "@tremor/react";
// import { useAppSelector, useAppDispatch } from "../../hooks/store";

// import { connect } from "react-redux";
// import {
//   addNewMaterial,
//   MaterialId,
//   Material,
// } from "../../redux/store/users/slice";
import estu from "../../../assets/estu.png";
import { useAppSelector, useAppDispatch } from "../../../hooks/store";
import { useState, useEffect } from "react";
import { useMaterialAcciones } from "../../../hooks/useMaterialAcciones";
import { useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

function CreateNuevoMaterial() {
  const materlialState = useAppSelector((state) => state.materiales);
  const { error, loading, listMaterial: posts } = materlialState;
  const dispatch = useAppDispatch();
  const { listarMateriales } = useMaterialAcciones();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {},
  });
  //Estado del componente CrearMaterial, para difereciar cuando crea a cuando actualiza
  // const [ec, setEstadoComp] = useState(false);

  useEffect(() => {
    // console.log("Entra dos ");
    dispatch(listarMateriales());
  }, [dispatch]);

  const [seleccionados, setSeleccionados] = useState({});
  useEffect(() => {
    console.clear();
    console.log(seleccionados);
  }, [seleccionados]);

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setSeleccionados((prev) => ({ ...prev, [id]: checked }));
    console.log(seleccionados);
  };
  const handlePhoneChange = (value) => {
    setValue("phoneinput", value);
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setResult(null);

  //   const form = event.target as HTMLFormElement;
  //   const formData = new FormData(form);
  //   const title = formData.get("title") as string;
  //   const category = {
  //     name: formData.get("name") as string,
  //     bandera: true as boolean,
  //   };
  //   const description = formData.get("description") as string;
  //   const imageUrl = "mn2" as string;
  //   const author = {
  //     name: formData.get("name2") as string,
  //     imageUrl:
  //       formData.get("name2") === "Vicedecano Admin"
  //         ? "admin"
  //         : ("admin" as string),
  //   };

  //   if (!title || !description || !imageUrl) {
  //     return setResult("ko");
  //   }
  //   crearMaterial({ title, category, description, imageUrl, author });
  //   setResult("ok");
  //   form.reset();
  //   // dispatch(addNewMaterial({title,category,description,imageUrl,author}));
  // };

  const Crear = (data) => {
    const { nombre, usuario, CI, phoneinput, anno, grupo, descripcion } = data;
    const idsSeleccionados = Object.keys(seleccionados).filter(
      (key) => seleccionados[key]
    );

    // event.preventDefault();
  };

  return (
    //   <div className="w-auto">
    //     <Title>Crear Nuevo Material</Title>
    //     <form className="">
    //       <TextInput placeholder="Título" />
    //       <Select defaultValue="1">
    //         <SelectItem value="1">Artículo básico</SelectItem>
    //         <SelectItem value="2">Tecnología</SelectItem>
    //       </Select>
    //       <Select defaultValue="1">
    //         <SelectItem value="1">Vicedecano Admin</SelectItem>
    //         <SelectItem value="2">Secretaria Docente</SelectItem>
    //       </Select>
    //       <Textarea
    //         placeholder="Caracterización del artículo"
    //         className="mx-auto max-w-xs"
    //       />
    //       <div>
    //         <Button type="submit">Crear material</Button>
    //       </div>
    //     </form>
    //   </div>
    <div className="grid grid-cols-4 gap-4">
      <div
        className="w-auto md:col-span-2  col-span-4 grid grid-cols-4   px-6 py-8  min-w-sm ml-6  mr-6 rounded-xl my-5  
shadow-md shadow-neutral-500
"
      >
        <h2 className="mr-auto ml-auto col-span-4 text-center text-xl">
          Insertar Estudiante
        </h2>
        <form
          onSubmit={handleSubmit(Crear)}
          className="  col-span-4 grid grid-cols-4 "
        >
          <label className="block pt-3 pr-2 col-span-4 sm:col-span-2 ">
            <span className="text-gray-900">Nombre y Apellidos </span>
            <input
              type="text"
              className="mt-1 block w-full bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2"
              placeholder="Edrien"
              name="nombre"
              {...register("nombre", {
                required: true,
                minLength: 3,
                maxLength: 40,
                pattern: {
                  value:
                    /^([A-ZÁÉÍÓÚ][a-zñáéíóú]+['\-]?[A-ZÁÉÍÓÚ]?[a-zñáéíóú]+)(\s(([dD][eE][lL]|[dD][eE]\s[lL][aA])\s)?([A-ZÁÉÍÓÚ][a-zñáéíóú]+['\-]?[A-ZÁÉÍÓÚ]?[a-zñáéíóú]+))*$/,
                  message: "Por favor, ingrese un nombre completo válido",
                },
              })}
            />
            <p className="text-red-800">
              {errors.nombre &&
                errors.nombre.type === "required" &&
                "Campo obligatorio"}{" "}
            </p>
            <p className="text-red-800">
              {errors.nombre &&
                errors.nombre.type === "pattern" &&
                errors.nombre.message}
            </p>
            <p className="text-red-800">
              {errors.nombre &&
                errors.nombre.type === "maxLength" &&
                "Longitud > 40"}
            </p>
            <p className="text-red-800">
              {errors.nombre &&
                errors.nombre.type === "minLength" &&
                "Longitud < 3"}
            </p>
          </label>
          <label className="block pt-3 pr-2 col-span-4 sm:col-span-2">
            <span className="text-gray-900">Usuario</span>
            <input
              type="text"
              className="mt-1 block w-full bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2"
              placeholder="Pérez Gómez"
              name="usuario"
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
          </label>
          <label className="block pt-3 col-span-4 pr-2 sm:col-span-2">
            <span className="text-gray-900">CI</span>
            <input
              {...register("CI", {
                required: true,
                minLength: 11,
                maxLength: 11,
                pattern: {
                  value:
                    /[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12][0-9]|3[01])[0-9]{5}/,
                  message: "CI con formato inválido",
                },
              })}
              type="text"
              className="mt-1 block w-full bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2"
              placeholder="99110705898"
              name="CI"
            />
            <p className="text-red-800">
              {errors.CI &&
                errors.CI.type === "required" &&
                "Campo obligatorio"}{" "}
            </p>
            <p className="text-red-800">
              {errors.CI && errors.CI.type === "pattern" && errors.CI.message}
            </p>
            <p className="text-red-800">
              {errors.CI && errors.CI.type === "maxLength" && "Longitud > 11"}
            </p>
            <p className="text-red-800">
              {errors.CI && errors.CI.type === "minLength" && "Longitud < 11"}
            </p>
          </label>

          <label className="block pt-3 pr-2 col-span-4 sm:col-span-2">
            <span className="text-gray-900">Teléfono</span>
            {/* <input
              {...register("telefono", {
                minLength: 3,
                maxLength: 20,
                pattern: {
                  value: /^[a-z]*$/,
                  message:
                    "No puede tener mayúsculas, espacios intermedios o números",
                },
              })}
              type="text"
              className="mt-1 block w-full bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2"
              placeholder="99110705898"
              name="title"
            /> */}
            <PhoneInput
              {...register("phoneinput", {
                validate: (value) =>
                  isValidPhoneNumber(value) || "Número inválido",
              })}
              numberInputProps={{
                className:
                  "mt-1 block w-full bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2", // Tus clases de Tailwind
              }}
              defaultCountry="CU" // Set Cuba as the default country
              id="phoneinput"
              placeholder="+52360362"
              onChange={handlePhoneChange}
            />
            <p className="text-red-800">
              {errors["phoneinput"] && errors["phoneinput"].message}
            </p>
          </label>
          <label className="block pt-3 col-span-4 pr-2 md:col-span-1">
            <span className="text-gray-900">Año</span>
            <select
              className="block w-full mt-1 bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2
          "
              {...register("anno", {})}
              name="anno"
            >
              <option>1er año</option>
              <option>2er año</option>
              <option>3er año</option>
              <option>4er año</option>
            </select>
          </label>
          <label className="block pt-3 col-span-4 pr-2 md:col-span-1">
            <span className="text-gray-900">Grupo</span>
            <select
              className="block w-full mt-1 bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2 "
              name="grupo"
              {...register("grupo", {})}
            >
              <option>Grupo 1</option>
              <option>Grupo 2</option>
              <option>Grupo 3</option>
              <option>Grupo 4</option>
              <option>Grupo 5</option>
              <option>Grupo 6</option>
            </select>
          </label>
          <label className="block pt-3 col-span-4 pr-2 md:col-span-2">
            <span className="text-gray-900">Descripción</span>
            <textarea
              className="mt-1 block w-full h-20 bg-zinc-200 rounded-lg resize-none focus:bg-neutral-50 border-2"
              placeholder="Describle el producto"
              name="description"
              {...register("descripcion", {})}
            ></textarea>
          </label>
          <label className=" pt-3  grid grid-cols-4 col-span-4  pr-2 ">
            <span className="text-gray-900 col-span-4 text-center font-bold text-lg pb-4">
              Materiales
            </span>
            {posts.map((item) => (
              <div key={item.id} className="col-span-2 md:col-span-1 ">
                <input
                  type="checkbox"
                  {...register(`materiales[${item.id}]`)}
                  id={item.id}
                  name={item.titulo}
                  checked={seleccionados[item.id] || false}
                  // checked={false}
                  onChange={handleChange}
                  className="mr-2 focus:ring-0"
                />
                <label htmlFor={item.id}>{item.titulo}</label>
              </div>
            ))}
          </label>
          <button
            type="submit"
            className=" text-slate-100 col-span-4 w-32 h-10 md:col-span-4 mt-3 mr-auto ml-auto block rounded-lg hover:bg-green-600 transition duration-200 ase-in-out bg-green-500 shadow-lg shadow-green-500/50"
          >
            Crear
          </button>
          {/* <span>
            {result === "ok" && (
              <Badge className=" bg-lime-200 border-none rounded-md ring-0 text-lime-900   ">
                Guardado correctamente
              </Badge>
            )}
            {result === "ko" && (
              <Badge className=" bg-red-200 border-none rounded-md ring-0 text-red-800   ">
                Campos obligatorios vacíos
              </Badge>
            )}
          </span> */}
        </form>
      </div>
      <div className="md:col-span-2 hidden  md:flex  md:justify-center">
        <img
          className="mask mask-hexagon-2 w-3/5 object-scale-down shadow-2xl"
          // src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          src={estu}
        />
      </div>
    </div>
  );
}
export default CreateNuevoMaterial;
