
import Swal from 'sweetalert2';
import useSelect from '../../../hooks/useSelect';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import SetPageTitle from '../../../components/setPageTitle';
import { Helmet } from 'react-helmet-async';
const SelectedClass = () => {
    // const [selectedItems, setSelectedItems] = useState([])
    const [selectedItems , , refetch] = useSelect()
    const pendinItem = selectedItems.filter(item=>item.paymentStatus === 'pending')
    console.log(pendinItem);
    const handlePay =(id)=>{
      console.log(id);
    }

    const handleRemove =(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://summer-school-camp-server-mocha.vercel.app/selectItemDelete/${id}`, {

                    method : 'DELETE',
                    headers : {
                      authorization : `Bearer ${localStorage.getItem('secret-access-token')}`
                     }

                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                          position: 'top-end',
                          icon: 'success',
                          title: 'successfully delete',
                          showConfirmButton: false,
                          timer: 1500
                        })
                    }
                })
            }
          })
    }

    return (
        <div className="my-20">
          <Helmet>
        <title>SpeckEasy | selected class</title>
      </Helmet>
      <SetPageTitle
        title="My Selected Class"
        desc="Experience top-notch instruction from our popular instructors, known for their dynamic teaching style and extensive knowledge."
      ></SetPageTitle>
      <div className="overflow-x-auto w-full">
        <Fade delay={1e2} cascade damping={1e-1}>
        {selectedItems.length > 0 &&<table className="table">
          {/* head */}
          <thead>
            <tr className="md:text-xl">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Available Seats</th>
              <th>Total Enrolled</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {pendinItem.map((item, idx) => (
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
                <td className='text-center'>{item.seats}</td>
                <td className="text-center">{item.enrolled}</td>
                <td className="text-right">${item.price}</td>
                <td>
                  <Link to={`/dashboard/pay/${item._id}`}><button
                   onClick={()=>handlePay(item._id)}
                    type="text"
                    className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                  >
                    pay
                  </button></Link>
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
        </table>}
        <div>
            {selectedItems.length===0 && <h2 className='text-center text-red-600 text-lg md:text-2xl'>no class selected!</h2>}
          </div>
        </Fade>
      </div>
    </div>
    );
};

export default SelectedClass;