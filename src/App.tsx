import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componets/Home";
import Menu,{loader as menuLoader} from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Creatreorder from "./features/order/Creatreorder";
import Order,{loader as orderLoader} from "./features/order/Order";
import Error from "./componets/Error";
import AppLayout from "./componets/AppLayout";

const App = () => {

  

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement:<Error/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader:menuLoader
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
          element: <Order/>,
          loader:orderLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}/>;
};

export default App;
