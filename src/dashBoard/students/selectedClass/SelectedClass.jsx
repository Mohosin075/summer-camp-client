
import SetPageTitle from '../../../components/setPageTitle';
import Swal from 'sweetalert2';
import useSelect from '../../../hooks/useSelect';
const SelectedClass = () => {
    // const [selectedItems, setSelectedItems] = useState([])
    const [selectedItems , , refetch] = useSelect()


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

                fetch(`http://localhost:5000/selectItemDelete/${id}`, {
                    method : 'DELETE'
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