import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useClass = () => {
    const {loading} = useContext(AuthContext)
    const {data : classes = [], isLoading : loadings, refetch} = useQuery({
        queryKey : ['classes'],
        enabled : !loading,
        queryFn : async()=>{
            const res = await fetch('http://localhost:5000/allClasses',{
               headers : {
                authorization : `Bearer ${localStorage.getItem('secret-access-token')}`
               }
            })
            return res.json();
        }
    })

    return [classes, loadings , refetch]
};

export default useClass;