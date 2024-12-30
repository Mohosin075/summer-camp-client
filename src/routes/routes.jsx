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
import FeadBack from "../dashBoard/admin/feadback/FeadBack";
import Pay from "../dashBoard/students/pay/Pay";
import AdminRoutes from "./AdminRoutes";
import InstructorRoutes from "./InstructorRoutes";
import PaymentHistory from "../dashBoard/students/paymentHistory/PaymentHistory";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>,
            loader : ()=> fetch('https://summer-school-camp-server-mocha.vercel.app/polularClass')
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
            loader : ()=> fetch('https://summer-school-camp-server-mocha.vercel.app/instructor')
        },
        {
            path : '/classes',
            element : <Class></Class>,
            loader : ()=> fetch('https://summer-school-camp-server-mocha.vercel.app/classes')
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
          element : <InstructorRoutes><AddClass></AddClass></InstructorRoutes>
        },
        {
          path : '/dashboard/myClass',
          element : <InstructorRoutes><MyClass></MyClass></InstructorRoutes>
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
          path : '/dashboard/paymentHistory',
          element : <PaymentHistory></PaymentHistory>
        },
        {
          path : '/dashboard/manageClass',
          element : <AdminRoutes><ManageClass></ManageClass></AdminRoutes>
        },
        {
          path : '/dashboard/manageUser',
          element : <AdminRoutes><ManageUser></ManageUser></AdminRoutes>
        },
        {
          path : '/dashboard/feadback/:id',
          element : <FeadBack></FeadBack>
        },
        {
          path : '/dashboard/pay/:id',
          element : <Pay></Pay>
        },
      ]
    }
  ]);

  export default router