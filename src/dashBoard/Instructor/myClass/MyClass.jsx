
import useClass from "../../../hooks/useClass";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import SetPageTitle from "../../../components/SetPageTitle";
import { Helmet } from "react-helmet-async";

const MyClass = () => {
  const [classes] = useClass();
  const { user } = useContext(AuthContext);
  console.log(classes);
  const myClasses = classes.filter((item) => item?.email === user?.email);
// TODO : pending class not showing
  console.log(classes);
  return (
    <div className="my-20">
      <Helmet>
        <title>SpeckEasy | my class</title>
      </Helmet>
      <SetPageTitle
        title="My Classes"
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
              <th>Email</th>
              <th>status</th>
              <th>Total Enrolled</th>
              <th>Price</th>
              <th>Feadback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((item, idx) => (
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
                <td className={`${
                    item.status === "approved"
                      ? "text-green-500"
                      : "text-red-600"
                  } text-lg`}>{item.status}</td>
                <td className="text-center">{item.enrolled}</td>
                <td className="text-right">${item.price}</td>
                <td>{item.status === 'denied' &&
                  <Link to={`/dashboard/feadback/${item._id}`}>
                    <button
                      type="text"
                      className="bg-sky-600 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded"
                    >
                      feadback
                    </button>
                  </Link>}
                </td>
                <td>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                  >
                    update
                  </button>
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

export default MyClass;
