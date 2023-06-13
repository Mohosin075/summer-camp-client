
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import SetPageTitle from '../../../components/setPageTitle';
const SelectedClass = () => {
    const {user}  = useContext(AuthContext)
    const [selectedItems, setSelectedItems] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/select/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setSelectedItems(data);
        })
    },[])


    const handleRemove =(id)=>{
        console.log("clicked", id);
    }

    return (
        <div className="my-20">
      <SetPageTitle
        title="My Selected Class"
        desc="Experience top-notch instruction from our popular instructors, known for their dynamic teaching style and extensive knowledge."
      ></SetPageTitle>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="md:text-xl">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Total Enrolled</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item, idx) => (
              <tr key={item._id} className="hover md:text-md">
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
                <td>{item.instructor}</td>
                <td className="text-center">{item.enrolled}</td>
                <td className="text-right">${item.price}</td>
                <td>
                  <button
                    type="text"
                    className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                  >
                    pay
                  </button>
                </td>
                <td>
                  <button onClick={()=>handleRemove(item._id)}
                    type="text"
                    className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                  >
                    remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default SelectedClass;