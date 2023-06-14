import SetPageTitle from "../../../components/setPageTitle";
import useClass from "../../../hooks/useClass";

const ManageClass = () => {
    const [classes] = useClass();
    console.log(classes);
    return (
        <div className="my-20">
      <SetPageTitle
        title="Manage Classes"
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
                <td className="text-red-500 text-lg">{item.status}</td>
                <td className="text-center">{item.seats}</td>
                <td className="text-right">${item.price}</td>
                <td>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                  >
                    Approve
                  </button>
                </td>
                <td>
                  <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                  >Deny
                    
                  </button>
                </td>
                <td>
                  <button
                    type="submit"
                    className="bg-sky-600 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded"
                  >
                     feadback
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

export default ManageClass;