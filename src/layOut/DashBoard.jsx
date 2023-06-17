import { Link, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { FaEdit, FaFileArchive, FaHistory, FaHome, FaMale, FaPlusCircle, FaStore, FaStoreAltSlash, FaUserEdit, FaWrench } from "react-icons/fa";

const DashBoard = () => {
  const [users] = useUser();
  const { user,logOut } = useContext(AuthContext);

  const currentUser = users.find((current) => current?.email === user?.email);
  const currentUserRole = currentUser?.role;
  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(err=>{
        console.log(err);
        toast.error(err.message)
    })
}
  const listItem = (
    <>
      {currentUserRole === "student" && (
        <>
          <li>
            <Link to="/dashboard"><span><FaHome /></span>User Home</Link>
          </li>
          <li>
            <Link to="/dashboard/selectedClass"><span><FaStoreAltSlash /></span>My Selected Class</Link>
          </li>
          <li>
            <Link to="/dashboard/elrollClass"><span><FaWrench /></span>My Enrolled Classes</Link>
          </li>
          <li>
            <Link to="/dashboard/paymentHistory"><span><FaHistory /></span>Payment history</Link>
          </li>
        </>
      )}

      {currentUserRole === "instructor" && (
        <>
          <li>
            <Link to="/dashboard"><span><FaHome /></span>Instructor Home</Link>
          </li>
          <li>
            <Link to="/dashboard/addClass"><span><FaPlusCircle /></span>Add a Class</Link>
          </li>
          <li>
            <Link to="/dashboard/myClass"><span><FaStore /></span>My Classes</Link>
          </li>
        </>
      )}

      {currentUserRole === "admin" && (
        <>
          <li>
            <Link to="/dashboard"><span><FaHome /></span>Admin Home</Link>
          </li>
          <li>
            <Link to="/dashboard/manageClass"><span><FaEdit /></span>Manage Classes</Link>
          </li>
          <li>
            <Link to="/dashboard/manageUser"><span><FaUserEdit /></span>Manage Users</Link>
          </li>
        </>
      )}
      <li>
            <Link to="/"><span><FaHome /></span>Home</Link>
          </li>
      <li>
      <Link to='/'><button onClick={handleLogOut} className="btn btn-outline">Log Out</button></Link>
          </li>
    </>
  );
  return (
    <>
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar py-5  bg-blue-200">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-lg md:text-xl lg:text-2xl font-semibold">
            <a href="/" className="flex items-center">
              <span>
                <img
                  className="w-8 h-8 mr-2 rounded"
                  src="https://i.ibb.co/sqvyqPF/download.png"
                  alt=""
                />
              </span>
              <span className="text-orange-600"> SpeakEasy </span>{" "}
              <span className="text-blue-600"> Language</span>
            </a>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu flex items-center menu-horizontal">
              {/* Navbar menu content here */}
              {listItem}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  h-full bg-blue-300">
          {/* Sidebar content here */}
          {listItem}
        </ul>
      </div>
    </div>
    <Outlet></Outlet>
    </>
  );
};

export default DashBoard;
