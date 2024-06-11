import { createSlice } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { PayloadAction } from "@reduxjs/toolkit";

import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_EDIT_REQUEST,
    USER_EDIT_SUCCESS,
    USER_EDIT_FAIL,
    USER_EDIT_RESET,

    USER_SOLO_REQUEST,
    USER_SOLO_SUCCESS,
    USER_SOLO_FAIL,
    USER_SOLO_RESET,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,
} from '../constants/usersConstants';

const getUserInfoFromLocalStorage = () => {
    const userInfoStorage = localStorage.getItem('userInfo');
    return userInfoStorage ? JSON.parse(userInfoStorage) : null;
};

const initialState = {
    error: null,
    loading: false,
    
    userInfo: getUserInfoFromLocalStorage(), // Utiliza la función para obtener el estado inicial
};

export const sliceuser = createSlice({
    name: "usuarios",
    initialState,
    reducers: {

        //TODO de logueo.......................................
        userLoginRequest: (state) => {
            state.loading = true;
            console.log("USER_LOGIN_REQUEST")
        },
        userLoginSuccess: (state, action) => {
            state.loading = false;
            state.error=null;
            state.userInfo = action.payload.data;
            console.log("USER_LOGIN_SUCCESS")
        },
        userLoginFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
             console.log("En el redocer "+ state.error)
            console.log("USER_LOGIN_FAIL")
        },
        userLogout: (state) => {
            state.error = null;
            state.loading = false;
            state.userInfo = getUserInfoFromLocalStorage();
            console.log("USER_LOGOUT")
        },
        //aqui termina logueo
        //.......................................................

        // Aquí puedes agregar los otros reducers para registro, edición y listado de usuarios

        userRegisterReducer: (state = {}, action) => {
            switch (action.type) {
                case USER_REGISTER_REQUEST:
                    return { loading: true }

                case USER_REGISTER_SUCCESS:
                    return { loading: false, userInfo: action.payload }

                case USER_REGISTER_FAIL:
                    return { loading: false, error: action.payload }

                case USER_LOGOUT:
                    return {}

                default:
                    return state
            }
        },
        userSoloReducer: (state = { user: {} }, action) => {
            switch (action.type) {
                case USER_SOLO_REQUEST:
                    return { ...state, loading: true }

                case USER_SOLO_SUCCESS:
                    return { loading: false, user: action.payload }

                case USER_SOLO_FAIL:
                    return { loading: false, error: action.payload }

                case USER_SOLO_RESET:
                    return { user: {} }

                default:
                    return state
            }
        },
        userListReducer: (state = { users: [] }, action) => {
            switch (action.type) {
                case USER_LIST_REQUEST:
                    return { loading: true }

                case USER_LIST_SUCCESS:
                    return { loading: false, users: action.payload }

                case USER_LIST_FAIL:
                    return { loading: false, error: action.payload }

                case USER_LIST_RESET:
                    return { users: [] }

                default:
                    return state
            }
        },
        userEditReducer: (state = {}, action) => {
            switch (action.type) {
                case USER_EDIT_REQUEST:
                    return { loading: true }

                case USER_EDIT_SUCCESS:
                    return { loading: false, success: true, userInfo: action.payload }

                case USER_EDIT_FAIL:
                    return { loading: false, error: action.payload }

                case USER_EDIT_RESET:
                    return {}

                default:
                    return state
            }
        }


    }




});
export default sliceuser.reducer;

export const { userLoginReducer, userLoginRequest, userLoginFail, userLoginSuccess, userLogout } = sliceuser.actions;


 // userLoginReducer: (state, action) => {
        //     console.log(action.type)

        //     switch (action.type) {
        //         case USER_LOGIN_REQUEST: //este es para cuando se hace una solicitud de inicio de sesion
        //             return { loading: true }

        //         case USER_LOGIN_SUCCESS: // se activa cuando la solictud de inicio de sesion se completa con exito, loading false porque ya deja de cargar
        //             return {
        //                 loading: false, userInfo: action.payload
        //             } //el action payload incluye la informacion del usuario y el tokend

        //         case USER_LOGIN_FAIL: // esto es cuando el inicio de sesion fallo 
        //             return { loading: false, error: action.payload } // se deja de cargar y se muestra un mensaje de error

        //         case USER_LOGOUT: // se retorna vacio porque si se cierra sesion se quita el tokend y la sesion en general 
        //             return {
        //                 error: null,
        //                 loading: false,
        //                 userInfo: getUserInfoFromLocalStorage(),

        //             }

        //         default:
        //             return state


        //     }