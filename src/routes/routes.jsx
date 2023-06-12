import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/home/home/Home";
import ErrorPage from "../pages/error/errorPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Class from "../pages/classes/class/Class";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>
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
            path : '/classes',
            element : <Class></Class>,
            loader : ()=> fetch('http://localhost:5000/classes')
        },
      ]
    },
  ]);

  export default router