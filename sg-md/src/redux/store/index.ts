// import { combineReducers } from "redux";
import { configureStore, Middleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// type Middleware
import materialReducers from "./users/slicematerial";
import sliceuser from "./users/sliceuser";
import { AnyAction } from "redux";

//esto es lo que llamamos middleware para la persistencia de datos
// despues de modificar el estado. estos metodos se estan enjecutando en un tiempo distinto

const persistenciaMiddleware: Middleware = (store) => (next) => (action) => {
  //   console.log(store.getState()); se puede ver el estado antes de la accion
  console.log(action);
  next(action);
  //   console.log(store.getState()); se puede ver el estado despues de la accion
//  if (action.type.startsWith("materiales/")) {
   // Obtiene el estado actualizado solo del reducer 'materiales'
   const materialesState = store.getState().materiales;

   // Persiste solo el estado del reducer 'materiales'
   localStorage.setItem(
     "__redux__state__",
     JSON.stringify({ materiales: materialesState })
   );
 }
  // esto copia el nuevo estado a un json
// const persistedState = JSON.parse(
//   localStorage.getItem("__redux__state__") ?? "{}"
// );

export const store = configureStore({
  reducer: {
    materiales: materialReducers,
    usuarios: sliceuser,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistenciaMiddleware),
  
});

export type RootState = ReturnType<typeof store.getState>; // para que al usar getstate en ts no de error
export type AppDispatch = typeof store.dispatch; // lo mismo para los dispatch

// export default combineReducers({

// })
