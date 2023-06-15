import Swal from "sweetalert2";
import SetPageTitle from "../../../components/setPageTitle";
import useUser from "../../../hooks/useUser";
import axios from "axios";

const ManageUser = () => {
  const [users, , refetch] = useUser();
  const alluser = users.filter((item) => item.role === "student");
  console.log(alluser);

  const handleMakeInstructor = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`http://localhost:5000/makeInstructor/${id}`, {
          // Request data
        }, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('secret-access-token')}`
          }
        })
          .then((data) => {
            if (data.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "make instructor successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`http://localhost:5000/makeAdmin/${id}`, {
          // Request data
        }, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('secret-access-token')}`
          }
        })
          .then((data) => {
            if (data.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "make instructor successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div className="my-20">
      <SetPageTitle
        title="Manage Users"
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
              <th>Email</th>
              <th> Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {alluser.map((item, idx) => (
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
                <td>{item.email}</td>
                <td>
                  <button
                    onClick={() => handleMakeInstructor(item._id)}
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                  >
                    make instructor
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleMakeAdmin(item._id)}
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
                  >
                    make admin
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

export default ManageUser;
