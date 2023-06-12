import { useLoaderData } from "react-router-dom";
import { FaRegHeart } from 'react-icons/fa';
import SetPageTitle from "../../../components/setPageTitle";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const Class = () => {
  const loadClass = useLoaderData();
  const {user} = useContext(AuthContext)

    const handleSelectCourse =(id)=>{
        if(!user){
            console.log("login first");
        }
    }

  return (
    <div className="my-20">
        <SetPageTitle title='Select Class for Learn ' desc='Expand your horizons with our foreign language learning program. Gain fluency in a new language through interactive lessons and immersive experiences. Unlock new opportunities and connect with cultures around the world.'></SetPageTitle>
        <div className="grid md:grid-cols-2 grid-flow-row-dense lg:grid-cols-3 gap-10 w-full mx-auto">
      {loadClass.map((singleClass) => (
        <div key={singleClass._id} className="card w-full glass">
          <figure>
            <img src={singleClass.image} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{singleClass.name}</h2>
            <p>Available Seats : {singleClass.seats}</p>
            <p>Price : ${singleClass.price}</p>
            <h3 className="font-semibold text-lg">Instructor : {singleClass.instructor}</h3>
            <div className="card-actions justify-end">
              <button onClick={()=>handleSelectCourse(singleClass._id)} className="btn">
              <FaRegHeart />
                select
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Class;
