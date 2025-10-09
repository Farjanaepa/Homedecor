import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";
import ProductDetails from "../Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading..</p>,
    children: [
 {
    index: true ,
    element: <Home /> ,
    // loader : () => fetch('./furnitureData.json')
  },
  {
    path: "/products",
    element: <Products />,
  },
   {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: '/product/:id',
    element: <ProductDetails />
  }
    ],
  },
  
 
//   {
//     path: "*",
//     element: <ErrorPage />,
//   },
]);

export default router;