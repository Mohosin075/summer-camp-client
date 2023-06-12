/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const Cart = ({singleClass}) => {
    const [disable, setDisable] = useState(false)
    return (
        <div key={singleClass._id} className="card w-full glass">
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
              <button disabled={disable} onClick={()=> setDisable(true)} className="btn">
              <FaRegHeart />
                select
              </button>
            </div>
          </div>
        </div>
    );
};

export default Cart;