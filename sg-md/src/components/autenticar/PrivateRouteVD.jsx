import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../hooks/store";

const PrivateRouteVD = ({ requiredCategory }) => {
  const userLogin = useAppSelector((state) => state.usuarios);
  const { error, loading, userInfo } = userLogin;
  console.log("Hola");

  //   return userInfo ? <Outlet /> : <Navigate to="/Autenticar" />;
  if (userInfo) {
    if (userInfo.categoria === requiredCategory) return <Outlet />;
    
    else if(userInfo.categoria ==='secretaria')
      return <Navigate to="/secretaria" />;
  } else return <Navigate to="/Autenticar" />;
};
export default PrivateRouteVD;
