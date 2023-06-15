import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    // const {data : users = [], isLoading : loading, refetch} = useQuery({
    //     queryKey : ['users'],
    //     queryFn : async()=>{
    //             const res = await fetch('http://localhost:5000/user', {
    //                 headers : {
    //                  authorization : `Bearer ${localStorage.getItem('secret-access-token')}`
    //                 }
    //              })
    //         return res.json();
    //     }
    // })

    const [axiosSecure] = useAxiosSecure()

    const {data : users = [], isLoading : loading, refetch} = useQuery(['users'], async()=>{
        const res = await axiosSecure.get('/user');
        return res.data;
    })

    return [users,loading, refetch]
};

export default useUser;