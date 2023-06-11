import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/home/home/Home";
import ErrorPage from "../pages/error/errorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        }
      ]
    },
  ]);

  export default router