import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import SetPageTitle from "../../../components/SetPageTitle";

const PopularInstuctor = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(()=>{
        fetch('https://summer-school-camp-server-mocha.vercel.app/popularInstructor')
        .then(res=>res.json())
        .then(data=>{
            setInstructors(data)
        })
    },[])
    return (
        <div className="my-20">
            <SetPageTitle title='Popular Instructor' desc='Experience top-notch instruction from our popular instructors, known for their dynamic teaching style and extensive knowledge.'></SetPageTitle>
            <div className="overflow-x-auto w-full mx-auto">
            <Fade delay={1e2} cascade damping={1e-1}>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="md:text-xl">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((item, idx) => (
              <tr key={item._id} className="hover md:text-lg">
                <td>
                  <label>{idx + 1}</label>
                </td>
                <td>
                  <img
                    className="w-8 md:w-20 h-8 md:h-20 bg-cover bg-center rounded"
                    src={item.image}
                    alt=""
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={()=>toast('this feature is not added!    ')} className="btn btn-ghost btn-xs">details</button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
        </Fade>
        <div className="text-center w-full mt-12 mb-5 md:mb-0">
        <Link to='/instructor'><button className="btn btn-outline md:w-1/3">See All Instructor</button></Link>
      </div>
      </div>
        </div>
    );
};

export default PopularInstuctor;