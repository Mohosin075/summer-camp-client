/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";



const Cart = ({singleClass}) => {
  const {user} = useContext(AuthContext)
    const [disable, setDisable] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const [users] = useUser();
    
    // console.log(user);
    const currentUser = users.find(item=> item?.email === user?.email)

    useEffect(()=>{
      if(user){
        setDisable(true)
      }
      if(user && users){
        if(currentUser?.role === 'student'){
          setDisable(false)
        }
    
      }
    },[currentUser, user, users])
    const handleSelect =(id)=>{
      if(!user){
        Swal.fire({
          title: 'Login first',
          text: "Please Login, then select your class!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now'
        }).then((result) => {
          if (result.isConfirmed) {
            // TODO : NOT WORKING REDIRECT
            <Navigate to="/login" state={{ from: location }} replace > </Navigate>
            navigate('/login')
          }
        })
        return
      }
      setDisable(true)
      console.log(id);
    }
    return (
        <div key={singleClass._id} className={`card w-full glass}`}>
          <figure>
            <img src={singleClass.image} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{singleClass.name}</h2>
            <p>Available Seats : {singleClass.seats}</p>
            <p>Price : ${singleClass.price}</p>
            <p>Total Enroll : {singleClass.enrolled}</p>
            <h3 className="font-semibold text-lg">Instructor : {singleClass.instructor}</h3>
            <div className="card-actions justify-end">
              <button disabled={disable} onClick={()=> handleSelect(singleClass._id)} className="btn">
              <FaRegHeart />
                select
              </button>
            </div>
          </div>
        </div>
    );
};

export default Cart;