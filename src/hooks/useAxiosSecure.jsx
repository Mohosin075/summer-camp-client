import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate(); 
    const axiosSecure = axios.create({
      baseURL: 'https://summer-school-camp-server-mocha.vercel.app', 
    });
  
    useEffect(() => {
      axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('secret-access-token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });
  
      axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            await logOut();
            navigate('/');
          }
          return Promise.reject(error);
        }
      );
    }, [logOut, navigate, axiosSecure]);
  
    return [axiosSecure];
};

export default useAxiosSecure;