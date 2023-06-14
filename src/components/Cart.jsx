/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import useAxiosSecure from "../hooks/useAxiosSecure";



const Cart = ({singleClass}) => {
  const {user} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [axiosSecure] = useAxiosSecure()
    const [role, setRole] = useState('student')
    const [red, setRed] = useState('white')
    const [users] = useUser();
    
    // console.log(user);
    
    useEffect(()=>{
      if(user && users){
        const currentUser = users.find(item=> item?.email === user?.email)
        setRole(currentUser?.role);
        if(singleClass?.seats === 0){
          setRed('red')
          console.log(red);
        }
      }
    })
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
      const studentEmail = {studentEmail : user?.email, hide : true}
      axiosSecure.post(`/select/${id}`, studentEmail)
      .then(data=>{
        console.log("after select response", data);


        if(data.data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Select Successfully. chack dashboard!',
            showConfirmButton: false,
            timer: 1500
          })
        }

        if(data.data.message){
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: "Already Select this course. check your dashboard!",
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      

    }
    return (
        <div key={singleClass._id} className={`card w-full  glass ${user && red==='red' && 'bg-red-600'}}`}>
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
              {user ? <button disabled={role==='student' ? false : true } onClick={()=> handleSelect(singleClass._id)} className="btn">
              <FaRegHeart />
                select
              </button> : <button onClick={()=> handleSelect(singleClass._id)} className="btn">
              <FaRegHeart />
                select
              </button>}
            </div>
          </div>
        </div>
    );
};

export default Cart;