import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import SetPageTitle from "../../components/setPageTitle";

const Instractor = () => {
  const loadData = useLoaderData();
  console.log(loadData);
  const { user } = useContext(AuthContext);
  return (
    <div className="my-20 px-4 md:px-8">
        <SetPageTitle title='All Instructor' desc='Discover the most sought-after language classes that have captivated learners worldwide.'></SetPageTitle>
      <div className="overflow-x-auto w-full mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {loadData.map((item, idx) => (
              <tr key={item._id}>
                <td>
                  <label>{idx + 1}</label>
                </td>
                <td>
                  <img
                    className="w-8 md:w-20 h-8 md:h-20 bg-cover bg-center rounded"
                    src={user?.photoURL}
                    alt=""
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instractor;
