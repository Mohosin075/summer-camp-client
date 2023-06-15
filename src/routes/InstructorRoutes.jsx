
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useInstructor from "../hooks/useInstructor";

const InstructorRoutes = ({children}) => {
    const [inInstructor, inInstructorLoading] = useInstructor();
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading || inInstructorLoading){
      return  <span className="loading loading-spinner loading-lg"></span>
    }
    if(user && inInstructor){
      return  children  
    }
    return <Navigate to='/login' state={{from : location}}></Navigate>
};

export default InstructorRoutes;