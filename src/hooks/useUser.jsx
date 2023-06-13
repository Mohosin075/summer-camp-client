import { useQuery } from "@tanstack/react-query";

const useUser = () => {
    const {data : users = [], isLoading : loading, refetch} = useQuery({
        queryKey : ['users'],
        queryFn : async()=>{
                const res = await fetch('http://localhost:5000/user')
            return res.json();
        }
    })

    return [users, loading , refetch]
};

export default useUser;