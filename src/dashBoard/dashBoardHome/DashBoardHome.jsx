import { useContext } from "react";
import SetPageTitle from "../../components/setPageTitle";
import { AuthContext } from "../../providers/AuthProvider";
import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";

const DashBoardHome = () => {
  const { user } = useContext(AuthContext);
  const [users] = useUser();
  const currentUser = users.find((item) => item.email === user.email);
  
  return (
    <div className="my-20">
      <span className="uppercase">
        <SetPageTitle title={`${currentUser?.role} Dashboard`}></SetPageTitle>
      </span>
      <h3 className="text-sm text-center my-8 text-red-500">
        More Details Commign soon.........
      </h3>
      <div className="text-center mb-5">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} />
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-2 uppercase">{user?.displayName}</h3>
      </div>
      <div className="text-center space-x-5">
        {currentUser?.role === "instructor" && (
          <>
            <button className="btn btn-info btn-outline">
              <Link to="/dashboard/addClass">Add A Class</Link>
            </button>
            <button className="btn btn-primary btn-outline">
              <Link to="/dashboard/myClass">My Class</Link>
            </button>
          </>
        )}
        {currentUser?.role === "student" && (
          <>
            <button className="btn btn-info btn-outline">
            <Link to="/dashboard/selectedClass">My Selected Class</Link>
            </button>
            <button className="btn btn-primary btn-outline">
            <Link to="/dashboard/elrollClass">My Enrolled Classes</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DashBoardHome;
