import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts";
import NotFound from "../shared/NotFound";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [{ path: "/" }],
  },
]);
export default route;
