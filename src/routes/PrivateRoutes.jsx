/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
      return  <div className="text-center">
        <span className="loading loading-spinner loading-lg text-center"></span>
      </div>
    }
    if(user){
      return  children
    }
    return <Navigate to='/login' state={{from : location}}></Navigate>
};

export default PrivateRoutes;