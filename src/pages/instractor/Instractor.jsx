
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import SetPageTitle from "../../components/setPageTitle";

const Instractor = () => {
  const loadData = useLoaderData();
  console.log(loadData);
  return (
    <div className="my-20 px-4 md:px-8">
      <Helmet>
        <title>SpeckEasy | Instructor</title>
      </Helmet>
        <SetPageTitle title='All Instructor' desc='Discover the most sought-after language classes that have captivated learners worldwide.'></SetPageTitle>
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
            {loadData.map((item, idx) => (
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
      </div>
    </div>
  );
};

export default Instractor;
