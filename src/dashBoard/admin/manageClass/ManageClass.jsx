import Swal from "sweetalert2";
import useClass from "../../../hooks/useClass";
import axios from "axios";
import { Link } from "react-router-dom";
import SetPageTitle from "../../../components/SetPageTitle";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const ManageClass = () => {
  const [classes, , refetch] = useClass();
  const handleApproved = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`https://summer-school-camp-server-mocha.vercel.app/approved/${id}`, {
          // Request data
        }, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('secret-access-token')}`
          }
        }).then((data) => {
          if (data.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "update status successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  const handleDenied = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`https://summer-school-camp-server-mocha.vercel.app/denied/${id}`, {
          // Request data
        }, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('secret-access-token')}`
          }
        }).then((data) => {
          if (data.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "update status successfully!",
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
      <Helmet>
        <title>SpeckEasy | manage classes</title>
      </Helmet>
      <SetPageTitle
        title="Manage Classes"
        desc="Experience top-notch instruction from our popular instructors, known for their dynamic teaching style and extensive knowledge."
      ></SetPageTitle>
      <div className="overflow-x-auto w-full">
      <Fade delay={1e2} cascade damping={1e-1}>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="md:text-xl">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>status</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Approve</th>
              <th>Deny </th>
              <th>Feadback</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, idx) => (
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
                <td>{item.email}</td>
                <td
                  className={`${
                    item.status === "approved"
                      ? "text-green-500"
                      : "text-red-600"
                  } text-lg`}
                >
                  {item.status}
                </td>
                <td className="text-center">{item.seats}</td>
                <td className="text-right">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleApproved(item._id)}
                    disabled={
                      item?.status === "approved" || item?.status === "denied"
                        ? true
                        : false
                    }
                    type="text"
                    className={`bg-blue-500  text-white font-bold py-2 px-4 rounded`}
                  >
                    Approve
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDenied(item._id)}
                    disabled={
                      item?.status === "approved" || item?.status === "denied"
                        ? true
                        : false
                    }
                    type="text"
                    className="bg-purple-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Deny
                  </button>
                </td>
                <td>
                  <Link to={`/dashboard/feadback/${item._id}`}>
                    <button
                      onClick={() => handleFeadBack(item._id)}
                      type="text"
                      className="bg-sky-600 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded"
                    >
                      feadback
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </Fade>
      </div>
    </div>
  );
};

export default ManageClass;
