import { Button, Card, TextInput, Textarea, Title,Badge } from "@tremor/react";
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
import { useState } from "react";
import  {useMaterialAcciones} from "../../hooks/useMaterialAcciones";

function CreateNuevoMaterial() {
// const dispatch=useAppDispatch();
const { crearMaterial } = useMaterialAcciones();
const [result,setResult]=useState<'ok'|'ko'|null>(null)


const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);

    const form = event.target as HTMLFormElement;
    const formData=new FormData(form)
    const title = formData.get("title") as string;
    const category = {name:formData.get("name") as string, bandera: true as boolean} ;
    const description = formData.get("description") as string;
    const imageUrl = "mn2" as string;
    const author = { name: formData.get("name2")as string,imageUrl:formData.get("name2") === "Vicedecano Admin" ? "admin" : "admin" as string}
      
    if (!title || !description || !imageUrl )
    {
        return setResult("ko");
    }
      crearMaterial({ title, category, description, imageUrl, author });
       setResult("ok");
       form.reset()
// dispatch(addNewMaterial({title,category,description,imageUrl,author}));

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
    <div
      className="w-auto px-6 py-8 max-w-xl min-w-sm mr-auto ml-auto rounded-xl my-5  border-slate-800 border-2 
shadow-md shadow-neutral-500
"
    >
      <h2 className="mr-auto ml-auto text-center text-xl">Crear Material</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg ">
        <label className="block">
          <span className="text-gray-900">Nombre del producto</span>
          <input
            type="text"
            className="mt-1 block w-full bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2"
            placeholder="Lápices"
            name="title"
          />
        </label>
        <label className="block">
          <span className="text-gray-900">Categoría</span>
          <select
            className="block w-full mt-1 bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2
          "
            name="name"
          >
            <option>Tecnología</option>
            <option>Artículo básico</option>
          </select>
        </label>
        <label className="block">
          <span className="text-gray-900">Autor</span>
          <select
            className="block w-full mt-1 bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2 "
            name="name2"
          >
            <option className="">Vicedecano Admin</option>
            <option>Secretaria</option>
          </select>
        </label>
        <label className="block">
          <span className="text-gray-900">Descripción</span>
          <textarea
            className="mt-1 block w-full bg-zinc-200 rounded-lg resize-none focus:bg-neutral-50 border-2"
            placeholder="Describle el producto"
            name="description"
          ></textarea>
        </label>
        <button
          type="submit"
          className=" text-slate-100 w-32 h-10  mt-3 mr-auto ml-auto block rounded-lg hover:bg-cyan-600 transition duration-200 ase-in-out bg-blue-500 shadow-lg shadow-blue-500/50"
        >
          Crear
        </button>
        <span>
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
        </span>
      </form>
    </div>
  );
}
export default CreateNuevoMaterial;
