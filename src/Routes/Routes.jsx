import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
 {
    index: true ,
    element: <Home /> 
  },
  {
    path: "/products",
    element: <Products />,
  },
    ],
  },
  
 
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;