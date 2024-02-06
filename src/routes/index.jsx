import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts";
import NotFound from "../shared/NotFound";
import HomePage from "../pages/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
        children: [{ path: "/", element: <HomePage /> },
        {path:"/about", element: <h1>About</h1>}
        ],
  },
]);
export default route;
