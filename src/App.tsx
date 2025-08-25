import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componets/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Creatreorder from "./features/order/Creatreorder";
import Error from "./componets/Error";
import AppLayout from "./componets/AppLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/new",
          element: <Creatreorder />,
        },
        {
          path: "/order/:orderId",
          element: <Creatreorder />,
        },
      ],
    },

    {
      path: "*",
      element: <Error />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
