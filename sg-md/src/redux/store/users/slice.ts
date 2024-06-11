import {createSlice} from '@reduxjs/toolkit'
import { connect } from "react-redux";
import { PayloadAction } from '@reduxjs/toolkit';

export type MaterialId=string; 
export interface Material {
	   title: string;
    category: { name:string , bandera: boolean };
    description: string ;
    imageUrl: string ;
    author: {
      name: string;
      imageUrl: string;
      
    },
}
export interface IdMaterial extends Material {
  id: MaterialId;
}

const DEFAULT_STATE=[
  {
    id: "dfdfgdf",
    title: "Tabletas de electrónicas",
    category: { name: "Tecnología", bandera: true },
    description: "Dispositivos portátiles con funciones de móvil y computadora",
    imageUrl: "mn1",
    author: {
      name: "Vicedecano Admin",
      imageUrl: "admin",
    },
  },
  {
    id: "dfdfgdfsdgdf",
    title: "Teclados",
    category: { name: "Tecnología", bandera: true },
    description:
      "Teclado: escribe, navega, controla y personaliza tu ordenador fácilmente",
    imageUrl: "mn3",
    author: {
      name: "Vicedecano Admin",
      imageUrl: "admin",
    },
  },
  {
    id: "dfdfgdfdfdg",
    title: "Memorias USB marca ADATA",
    category: { name: "Tecnología", bandera: true },
    description:
      "Memoria USB: almacena, transfiere y protege tus datos fácilmente.",
    imageUrl: "mn4",
    author: {
      name: "Vicedecano Admin",
      imageUrl: "admin",
    },
  },
  {
    id: "dfdfghgjghdf",
    title: "Calculadoras Científicas",
    category: { name: "Artículo básico", bandera: false },
    description: "Aparato que realiza operaciones matemáticas avanzadas.",
    imageUrl: "mn2",
    author: {
      name: "Vicedecano Admin",
      imageUrl: "admin",
    },
  },
  {
    id: "dfdsssssfgdf",
    title: "Lápices",
    category: { name: "Artículo básico", bandera: false },
    description:
      "Lápices: escribe, dibuja, borra y crea con facilidad y precisión.",
    imageUrl: "mn5",
    author: {
      name: "Vicedecano Admin",
      imageUrl: "admin",
    },
  },
  {
    id: "dfdfhhhhgdf",
    title: "Agendas 2024",
    category: { name: "Artículo básico", bandera: false },
    description:
      "Agenda: planifica, organiza, recuerda y gestiona tu tiempo eficientemente.",
    imageUrl: "mn6",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
    },
  },
];


const initialState: IdMaterial[] = (()=>{
  console.log("Aqui entra al mideware")
    const persistedState = localStorage.getItem("__redux__state__");
    return persistedState ?  JSON.parse(persistedState).materiales : DEFAULT_STATE;
})(); //se lee como estado inicial lo que esta en el local store sino se usa el default



export const materialSlice = createSlice({
  name: "materiales",
  initialState,
  reducers: {
    // deleteMarerialById:(state,action)=>{
    //deleteMarerialById:(state,action:PayloadAction<UserId>)=>{
    addNewMaterial: (state, action:PayloadAction<Material>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload}];
    },
    deleteMaterialById: (
      state,
      action: { type: string; payload: MaterialId }
    ) => {
      
      // esta es la accion
      // vamos a typar la accion
      const id = action.payload;
      return state.filter((Material) => Material.id !== id);
    },
  },
});
export default materialSlice.reducer;

export const { deleteMaterialById, addNewMaterial } = materialSlice.actions; //exportar el reduxers