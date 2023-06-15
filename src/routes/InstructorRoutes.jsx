
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const InstructorRoutes = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading || isAdminLoading){
      return  <span className="loading loading-spinner loading-lg"></span>
    }
    if(user && isAdmin){
      return  children  
    }
    return <Navigate to='/login' state={{from : location}}></Navigate>
};

export default InstructorRoutes;