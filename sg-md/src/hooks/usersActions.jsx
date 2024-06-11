import axios from "axios";
import { useAppSelector, useAppDispatch } from "./store";
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
  USER_SOLO_REQUEST,
  USER_SOLO_SUCCESS,
  USER_SOLO_FAIL,
  USER_SOLO_RESET,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../redux/store/constants/usersConstants";
import {
  userLoginReducer,
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userLogout,
} from "../redux/store/users/sliceuser";

export const useActions = () => {
  const dispatch = useAppDispatch();

  // const logout = () => (disptach) => {
  //     localStorage.removeItem('userInfo')
  //     disptach({ type: USER_LOGOUT })
  // }

  // const login = (user_name, password) => async (dispatch) => {
  //     try {
  //         dispatch({ type: USER_LOGIN_REQUEST });

  //         const config = {
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             }
  //         }

  //         const { data } = await axios.post(
  //             'http://127.0.0.1:8000/users/login/',
  //             { 'user_name': user_name, 'password': password }, config
  //         )

  //         dispatch({
  //             type: USER_LOGIN_SUCCESS,
  //             payload: data
  //         })

  //         localStorage.setItem('userInfo', JSON.stringify(data))

  //     } catch (error) {
  //         dispatch({
  //             type: USER_LOGIN_FAIL,
  //             payload: error.response && error.response.data.detail
  //                 ? error.response.data.detail
  //                 : error.message,
  //         })
  //     }
  // }
  const logout = () => (disptach) => {
    localStorage.removeItem("userInfo");
    disptach(userLogout({}));
  };

  const login = (user_name, password) => async (dispatch) => {
    try {
      dispatch(userLoginRequest({}));

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://127.0.0.1:8000/users/login/",
        { user_name: user_name, password: password },
        config
      );

      dispatch(
        userLoginSuccess({
          data,
        })
      );
      console.log(data)
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch(
        userLoginFail(
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message
        )
      );
    }
  };

  return { logout, login };
};
