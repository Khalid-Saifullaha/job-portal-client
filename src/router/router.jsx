import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/Signin/SignIn";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
