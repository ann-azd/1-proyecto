import { createSlice, createSelector } from '@reduxjs/toolkit'
import { connect } from "react-redux";
import { PayloadAction } from '@reduxjs/toolkit';

// export type MaterialId = string;
// export interface Material {
//     title: string;
//     category: { name: string, bandera: boolean };
//     description: string;
//     imageUrl: string;
//     author: {
//         name: string;
//         imageUrl: string;

//     },
// }
// export interface IdMaterial extends Material {
//     id: MaterialId;
// }

const DEFAULT_STATE = [
    {
        id: "1232",
        titulo: "Tabletas electrónicas",
        categoria: "Tecnología",
        descripcion: "Dispositivos portátiles con funciones de móvil y computadora",
        urlimage: "/media/materialdf.jpg",
        cantidad: "3243",
        autor: "Vicedecano Admin",
        autor_image: "/media/pic.jpg",
    },

    {
        id: "32534",
        titulo: "Teclados",
        categoria: "Tecnología",
        descripcion:
            "Teclado: escribe, navega, controla y personaliza tu ordenador fácilmente",
        urlimage: "/media/materialdf.jpg",
        cantidad: "3243",
        autor: "Vicedecano Admin",
        autor_image: "/media/pic.jpg",
    },

    {
        id: "fgdfdh",
        titulo: "Memorias USB marca ADATA",
        categoria: "Tecnología",
        descripcion:
            "Memoria USB: almacena, transfiere y protege tus datos fácilmente.",
        urlimage: "/media/materialdf.jpg",
        cantidad: "3243",
        autor: "Vicedecano Admin",
        autor_image: "/media/pic.jpg",
    },

    {
        id: "kjkjkdjsf",
        titulo: "Calculadoras Científicas",
        categoria: "Artículo básico",
        descripcion: "Aparato que realiza operaciones matemáticas avanzadas.",
        urlimage: "/media/materialdf.jpg",
        cantidad: "3243",
        autor: "Vicedecano Admin",
        autor_image: "/media/pic.jpg",
    },
    {
        id: "jjhgffdd",
        titulo: "Lápices",
        categoria: "Artículo básico",
        descripcion:
            "Lápices: escribe, dibuja, borra y crea con facilidad y precisión.",
        urlimage: "/media/materialdf.jpg",
        cantidad: "3243",
        autor: "Vicedecano Admin",
        autor_image: "/media/pic.jpg",
    },
    {
        id: "dfgdfgdf",
        titulo: "Agendas 2024",
        categoria: "Artículo básico",
        descripcion:
            "Agenda: planifica, organiza, recuerda y gestiona tu tiempo eficientemente.",
        urlimage: "/media/materialdf.jpg",
        cantidad: "3243",
        autor: "Vicedecano Admin",
        autor_image: "/media/pic.jpg",
    },

];


const getListaMateriales = () => {
    console.log("Aqui entra al mideware")
    const persistedState = localStorage.getItem("__redux__state__");
    // if (persistedState){
    //     console.log(persistedState +" tenia algo")
    // }

    return persistedState ? JSON.parse(persistedState).materiales.listMaterial : DEFAULT_STATE;
};
//se lee como estado inicial lo que esta en el local store sino se usa el default
const initialState = {
    error: null,
    creando: false,
    modificado: false,
    loading: false,
    listMaterial: getListaMateriales(), // Utiliza la función para obtener el estado inicial
};


export const materialSlice = createSlice({
    name: "materiales",
    initialState,
    reducers: {
        // deleteMarerialById:(state,action)=>{
        //deleteMarerialById:(state,action:PayloadAction<UserId>)=>{

        materialRequest: (state) => {
            state.loading = true; //lo puse en false
            console.log("MATERIAL_REQUEST")
            state.creando = false;
            state.modificado = false;
            
        },

        addNewMaterial: (state, action) => {
            state.loading = false;  // era false y lo puse en true
            state.error = null;
            state.creando = true;
            state.modificado = false;
            // const id = crypto.randomUUID();
            // state.listMaterial.push({ id, ...action.payload.data });
            state.listMaterial.push({ ...action.payload.data }); // le quite el id ramdom porque el trae su id desde la base de datos
        },
        // finCreacion(state){
        //     state.creando=false;

        // },
        deleteMaterialById: (
            state,
            action
        ) => {
            const id = action.payload;
            // Filtra la lista de materiales para excluir el material con el ID especificado
            state.listMaterial = state.listMaterial.filter((material) => material.id !== id);
        },
        errorAlCrear: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            console.log("Falló crear material")

        },
        establecerlista: (state, action) => {
            state.loading = true;
            state.listMaterial = action.payload.data;
            state.error = null;

        },
        updateMaterialaction: (state, action) => {
            state.creando = false;
            state.modificado = true;
            const updatedMaterial = action.payload.data;
            // Encuentra el índice del material que se va a actualizar
            const index = state.listMaterial.findIndex(material => material.id === updatedMaterial.id);
            if (index !== -1) {
                // Actualiza el material en el estado
                state.listMaterial[index] = updatedMaterial;
            }
        },

    },
    selectors: {
        getMaterialById: createSelector(
            (state) => state.listMaterial,
            (_, materialId) => materialId,
            (materiales, materialId) => materiales.find(material => material.id === materialId)
        ),

    },
});

export default materialSlice.reducer;
export const { getMaterialById } = materialSlice.selectors;
export const { deleteMaterialById, addNewMaterial, updateMaterialaction, finCreacion, errorAlCrear, materialRequest, establecerlista } = materialSlice.actions; //exportar el reduxers