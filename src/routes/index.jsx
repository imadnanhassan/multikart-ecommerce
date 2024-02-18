import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts";
import NotFound from "../shared/NotFound";
import HomePage from "../frontend/pages/Home";
import ProductsDetails from "../frontend/pages/Products/ProductsDetails";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/product", element: <h1>Products</h1> },
      { path: "/product/1", element: <ProductsDetails /> },
    ],
  },
]);
export default route;
