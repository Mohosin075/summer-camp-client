import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext)   
    
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
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      {/* TODO : conditional  */}
      <li>
        <Link to="/dashboard ">Dashboard </Link>
      </li>
      {user && <li>
        <img src={user?.photoURL} alt="" />
      </li>}
      <li>
        {user ? <Link to='#'> <button onClick={handleLogOut} className="btn btn-outline btn-secondary">Log Out</button> </Link> : <Link to='/login'>
          <button className="btn btn-outline btn-secondary">login</button>
        </Link>}
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar  bg-stone-300">
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
            <a href="" className="flex items-center"><span>
              <img
                className="w-8 h-8 mr-2 rounded"
                src="https://i.ibb.co/sqvyqPF/download.png"
                alt=""
              />
            </span>
            <span className="text-orange-600"> SpeakEasy </span>{" "}
            <span className="text-blue-600"> Language</span>
            <span className="text-green-600">Institute</span></a>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu flex items-center menu-horizontal">
              {/* Navbar menu content here */}
              {listItem}
            </ul>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          {listItem}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
