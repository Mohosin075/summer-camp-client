import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const useSelect = () => {
    const {user, loading} = useContext(AuthContext)
    const {data : selectedItems = [], isLoading : loadings, refetch} = useQuery({
        queryKey : ['selectedItems'],
        enabled : !loading,
        queryFn : async()=>{
            const res = await axios.get(`https://summer-school-camp-server-nine.vercel.app/select/${user?.email}`,{
               headers : {
                authorization : `Bearer ${localStorage.getItem('secret-access-token')}`
               }
            })
            return res.data;
        }
    })

    return [selectedItems, loadings , refetch]
};

export default useSelect;