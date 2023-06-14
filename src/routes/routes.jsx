import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/home/home/Home";
import ErrorPage from "../pages/error/errorPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Class from "../pages/classes/class/Class";
import Instractor from "../pages/instractor/Instractor";
import DashBoard from "../layOut/DashBoard";
import AddClass from "../dashBoard/Instructor/addAClass/AddClass";
import MyClass from "../dashBoard/Instructor/myClass/MyClass";
import PrivateRoutes from "./PrivateRoutes";
import ForgetPass from "../pages/forgetPass/ForgetPass";
import DashBoardHome from "../dashBoard/dashBoardHome/DashBoardHome";
import SelectedClass from "../dashBoard/students/selectedClass/SelectedClass";
import EnrollClass from "../dashBoard/students/enrollClass/EnrollClass";
import ManageClass from "../dashBoard/admin/manageClass/ManageClass";
import ManageUser from "../dashBoard/admin/manageUser/ManageUser";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>,
            loader : ()=> fetch('http://localhost:5000/polularClass')
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/register',
            element : <Register></Register>
        },
        {
            path : '/instructor',
            element : <Instractor></Instractor>, 
            loader : ()=> fetch('http://localhost:5000/instructor')
        },
        {
            path : '/classes',
            element : <Class></Class>,
            loader : ()=> fetch('http://localhost:5000/classes')
        },
        {
            path : '/forgetPass',
            element : <ForgetPass></ForgetPass>,
        },
      ]
    },
    {
      path : '/dashboard',
      element : <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>, 
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
          path : '/dashboard',
          element : <DashBoardHome></DashBoardHome>
        },
        {
          path : '/dashboard/addClass',
          element : <AddClass></AddClass>
        },
        {
          path : '/dashboard/myClass',
          element : <MyClass></MyClass>
        },
        {
          path : '/dashboard/selectedClass',
          element : <SelectedClass></SelectedClass>
        },
        {
          path : '/dashboard//elrollClass',
          element : <EnrollClass></EnrollClass>
        },
        {
          path : '/dashboard/manageClass',
          element : <ManageClass></ManageClass>
        },
        {
          path : '/dashboard/manageUser',
          element : <ManageUser></ManageUser>
        },
      ]
    }
  ]);

  export default router