import AdminLayout from "@Layouts/AdminLayout/AdminLayout";
import AuthLayout from "@Layouts/AuthLayout/AuthLayout";
import MainLayout from "@Layouts/MainLayout/MainLayout";
import AboutUs from "@pages/AboutUs";
import Categories from "@pages/Categories";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import ProductsByCat from "@pages/ProductsByCat";
import UserLogin from "@pages/UserLogin";
import UserRegister from "@pages/UserRegister";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products",
          element: <Categories />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "categories/products/:prefix",
          element: <ProductsByCat />,
          loader: ({ params }) => {
            if (
              typeof params.prefix !== "string" ||
              !/^[a-z]+$/i.test(params.prefix)
            ) {
              throw new Response("Bad Request", {
                statusText: "Category not found",
                status: 400,
              });
            }

            return true;
          },
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
      ],
    },
    {
      path: "auth",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <UserLogin />,
        },
        {
          path: "login",
          element: <UserLogin />,
        },
        {
          path: "register",
          element: <UserRegister />,
        },
      ],
    },
    {
      path: "admin",
      element: <AdminLayout />,
      errorElement: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
