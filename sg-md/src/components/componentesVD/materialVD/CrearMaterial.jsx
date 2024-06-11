import { Button, Card, TextInput, Textarea, Title, Badge } from "@tremor/react";
import imagenD from "../../../assets/mn1.png";
import estu from "../../../assets/mn4.png";
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
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useMaterialAcciones } from "../../../hooks/useMaterialAcciones";
import { useAppSelector, useAppDispatch } from "../../../hooks/store";
import { toast } from "react-hot-toast";
import { getMaterialById } from "../../../redux/store/users/slicematerial";
import Dialogo from "./Dialogo";
function CrearMaterial(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    defaultValues: {},
  });
  //Estado del componente CrearMaterial, para difereciar cuando crea a cuando actualiza
  const [ec, setEstadoComp] = useState(false);

  useEffect(() => {
    // esta logica permite actualizar el estado del componente en dependencia de los props
    if (props.id === null) {
      console.log("Entra vacio aaa " + props.id);
      setEstadoComp(false);
    } else if (props.id) {
      // console.log("Entra entra lleno " + props.id);
      setEstadoComp(true);
    }
  }, [props]);

  //este codigo permite cargar la informacion del material que se va a modificar
  const material = useAppSelector((state) => {
    if (props.id) {
      return getMaterialById(state, props.id);
    }
    return null; // O cualquier valor por defecto que desees
  });

  // const dispatch=useAppDispatch();
  const { crearMaterial, crearMaterial2, updateMaterial } =
    useMaterialAcciones();
  const disptach = useAppDispatch();
  const materialesList = useAppSelector((state) => state.materiales);
  const { error, loading, creando, modificado, listMaterial } = materialesList;
  //   const [result, setResult] = (useState < "ok") | "ko" | (null > null);

  // const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     setResult(null);

  //     const form = event.target as HTMLFormElement;
  //     const formData=new FormData(form)
  //     const title = formData.get("title") as string;
  //     const category = {name:formData.get("name") as string, bandera: true as boolean} ;
  //     const description = formData.get("description") as string;
  //     const imageUrl = "mn2" as string;
  //     const author = { name: formData.get("name2")as string,imageUrl:formData.get("name2") === "Vicedecano Admin" ? "admin" : "admin" as string}

  //     if (!title || !description || !imageUrl )
  //     {
  //         return setResult("ko");
  //     }
  //       crearMaterial({ title, category, description, imageUrl, author });
  //        setResult("ok");
  //        form.reset()
  // // dispatch(addNewMaterial({title,category,description,imageUrl,author}));

  // };
  const [selectedImage, setSelectedImage] = useState(imagenD);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [estadoDialogo, setEstadoDialgo] = useState(false);
  const [dataToSubmit, setDataToSubmit] = useState(null);

  const handleConfirm = async () => {
    setShowConfirmDialog(false);
    // setEstadoDialgo(true);
    if (dataToSubmit) {
      const { titulo, categoria, cantidad, descripcion, archivo } =
        dataToSubmit;
      const formData = new FormData();
      formData.append("titulo", titulo);
      formData.append("categoria", categoria);
      formData.append("cantidad", cantidad);
      formData.append("descripcion", descripcion);

      if (archivo && archivo.length > 0) {
        formData.append("urlimage", archivo[0]);
      }

      // Aquí va la lógica para modificar el material
      await disptach(updateMaterial(formData, props.id));
    }
  };

  // Función para manejar la cancelación del diálogo
  const handleCancel = () => {
    setShowConfirmDialog(false);
    // setEstadoDialgo(false);
  };

  const handleImageChange = (event) => {
    console.log("Entra al cambio");
    const file = event.target.files[0];
    if (file) {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      const allowedExtensions = ["jpg", "JPG", "JPG", "png"];

      if (allowedExtensions.includes(fileExtension)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        toast.error("Formato inválido para imagen");
      }
    }
  };
  const archivoRegister = register("archivo", {
    // required: "Por favor, selecciona un archivo.",
    validate: (value) => {
      if ((!value || value.length === 0) && !ec)
        return "Por favor, selecciona un archivo.";

      if (value && value.length > 0) {
        const fileExtension = value[0].name.split(".").pop();
        if (
          fileExtension !== "jpg" &&
          fileExtension !== "png" &&
          fileExtension !== "PNG" &&
          fileExtension !== "JPG"
        ) {
          return "Por favor, selecciona un archivo jpg o png.";
        }
      }

      return true;
    },
  });

  const Crear = async (data, event) => {
    event.preventDefault();

    if (ec) {
      setDataToSubmit(data);
      setShowConfirmDialog(true);
    } else {
      //  const file = event.target.files[0];
      const { titulo, categoria, cantidad, descripcion } = data;
      const formData = new FormData();
      formData.append("titulo", titulo);
      formData.append("categoria", categoria);
      formData.append("cantidad", cantidad);
      formData.append("descripcion", descripcion);

      if (data.archivo && data.archivo.length > 0) {
        // Si se seleccionó una imagen, la agregas al formData
        formData.append("urlimage", data.archivo[0]);
      } else {
        // Si no se seleccionó ninguna imagen, usas la imagen del servidor
        // formData.append("urlimage", `http://127.0.0.1:8000${material.urlimage}`);selectedImage
        // formData.append("urlimage", selectedImage);
      }

      // if (ec) {
      //   // if (estadoDialogo)
      //   await disptach(updateMaterial(formData, props.id));
      // } else {
      //   await disptach(crearMaterial2(formData));
      // }
      await disptach(crearMaterial2(formData));
    }
  };
  useEffect(() => {
    if (ec) {
      // console.log("Entra vacio aa " + props.id);
      // if (!creando) {
      //   console.log("Entra con creado adentro " + creando);
      // }

      reset({
        titulo: material.titulo,
        categoria: material.categoria,
        cantidad: material.cantidad,
        descripcion: material.descripcion,

        //src={`http://127.0.0.1:8000${post.urlimage}`}

        // Asegúrate de que los nombres de los campos coincidan con los que usas en tu formulario
      });
      setSelectedImage(`http://127.0.0.1:8000${material.urlimage}`);
    }

    if (creando || modificado) {
      toast.success(
        ec
          ? "Material modificado satisfactoriamente"
          : "Material creado satisfactoriamente"
      );
      reset({
        titulo: "",
        categoria: "Tecnología",
        cantidad: "",
        descripcion: "",

        // Asegúrate de que los nombres de los campos coincidan con los que usas en tu formulario
      });
      setSelectedImage(imagenD);
    }
    if (modificado) {
      props.actualizarEstado(1, null);
    }
    if (!ec) {
      reset({
        titulo: "",
        categoria: "Tecnología",
        cantidad: "",
        descripcion: "",
      });
      setSelectedImage(imagenD);
    }

    if (error) {
      toast.error(
        ec ? "No se pudo modificar el material" : "No se pudo crear el material"
      );
      console.log("Error");
    }
  }, [error, creando, modificado, ec]);

  return (
    <div className="grid grid-cols-4 gap-4">
      <div
        className="w-auto md:col-span-2  col-span-4 grid grid-cols-4   px-6 py-8  min-w-sm ml-6  mr-6 rounded-xl my-5  
shadow-md shadow-neutral-500
"
      >
        <h2 className="mr-auto ml-auto col-span-4 text-center text-xl">
          {ec ? "Modificar Material" : "Crear Material"}
        </h2>
        <form
          onSubmit={handleSubmit(Crear)}
          className=" col-span-4 grid grid-cols-4  "
        >
          <label className="block pt-3 pr-2 col-span-4 sm:col-span-2 ">
            <span className="text-gray-900">Nombre del producto</span>
            <input
              id="title"
              type="text"
              className="mt-1 block w-full bg-zinc-100 rounded-lg focus:bg-neutral-50 border-2"
              placeholder="Lápices"
              name="title"
              {...register("titulo", {
                required: true,
                minLength: 3,
                maxLength: 20,
                pattern: {
                  value: /^[A-Z]\S*/,
                  message:
                    "Debe empezar con mayúscula y no contener espacios al inicio",
                },
              })}
            />
            <p className="text-red-800 ">
              {errors.titulo &&
                errors.titulo.type === "required" &&
                "Campo obligatorio"}{" "}
            </p>
            <p className="text-red-800">
              {errors.titulo &&
                errors.titulo.type === "pattern" &&
                errors.titulo.message}
            </p>
            <p className="text-red-800">
              {errors.titulo &&
                errors.titulo.type === "maxLength" &&
                "Longitud > 20"}
            </p>
            <p className="text-red-800">
              {errors.titulo &&
                errors.titulo.type === "minLength" &&
                "Longitud < 3"}
            </p>
          </label>
          <label className="block pt-3 pr-2 col-span-4 sm:col-span-2 ">
            <span className="text-gray-900">Categoría</span>
            <select
              className="block w-full mt-1 bg-zinc-100 rounded-lg focus:bg-neutral-50 border-2
          "
              name="categoria"
              {...register("categoria", {})}
            >
              <option>Tecnología</option>
              <option>Artículo básico</option>
            </select>
          </label>
          <label className="block pt-3 pr-2 col-span-4 sm:col-span-2 ">
            <span className="text-gray-900">Cantidad</span>
            <input
              type="text"
              className="mt-1 block w-full bg-zinc-100 rounded-lg focus:bg-neutral-50 border-2"
              placeholder="54334"
              name="cantidad"
              {...register("cantidad", {
                required: true,
                maxLength: 20,
                pattern: {
                  value: /^(0|[1-9]\d*)$/,
                  message: "Número inválido",
                },
              })}
            />
            <p className="text-red-800">
              {errors.cantidad &&
                errors.cantidad.type === "required" &&
                "Campo obligatorio"}{" "}
            </p>
            <p className="text-red-800">
              {errors.cantidad &&
                errors.cantidad.type === "maxLength" &&
                "Longitud > 20"}
            </p>
            <p className="text-red-800">
              {errors.cantidad &&
                errors.cantidad.type === "pattern" &&
                errors.cantidad.message}
            </p>
          </label>
          <label className="block pt-3 pr-2 col-span-4 sm:col-span-2 row-span-2 ">
            <span className="text-gray-900">Seleccionar imagen</span>
            <input
              type="file"
              id="custom-input"
              className="mt-1  w-full h-10 bg-zinc-100 rounded-lg focus:bg-neutral-50 border-2 hidden "
              name="archivo"
              // {...register("archivo", {
              //   validate: (value) => {
              //     if (!value || value.length === 0)
              //       return "Por favor, selecciona un archivo.";

              //     const fileExtension = value[0].name.split(".").pop();
              //     if (fileExtension !== "jpg" && fileExtension !== "png") {
              //       return "Por favor, selecciona un archivo jpg o png.";
              //     }
              //     return true;
              //   },
              // })}
              {...archivoRegister}
              onChange={(e) => {
                archivoRegister.onChange(e); // Llamada al onChange de React Hook Form
                handleImageChange(e); // Tu lógica personalizada
              }}
            />
            <label htmlFor="custom-input" className="cursor-pointer">
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-44 object-fit rounded-lg"
              />
            </label>

            {/* <label
              for="custom-input"
              class="block text-sm text-slate-500 mr-4 py-2 px-4
      rounded-md border-0 text-sm font-semibold bg-pink-50
      text-pink-700 hover:bg-pink-100 cursor-pointer"
            >
              Seleccionar archivo
            </label>
            <label class="text-sm text-slate-500">{"Nombre"}</label> */}

            <p className="text-red-800">
              {errors.archivo && errors.archivo.message}
            </p>
          </label>

          <label className="block pt-3 pr-2 col-span-4 sm:col-span-2 ">
            <span className="text-gray-900">Descripción</span>
            <textarea
              className="mt-1 block w-full h-20 bg-zinc-100 rounded-lg resize-none focus:bg-neutral-50 border-2"
              placeholder="Describle el producto"
              name="description"
              {...register("descripcion", {})}
            ></textarea>
          </label>
          <button
            type="submit"
            className=" text-slate-100 w-32 h-10 col-span-4 md:col-span-4 mt-3 mr-auto ml-auto block rounded-lg hover:bg-cyan-600 transition duration-200 ase-in-out bg-blue-500 shadow-lg shadow-blue-500/50"
          >
            {ec ? "Modificar" : "Crear"}
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

      <Dialogo
        isOpen={showConfirmDialog}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        tipo="modificar"
      />
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
export default CrearMaterial;
