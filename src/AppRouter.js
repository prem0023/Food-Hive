import "./index.css";
import React, { Suspense, useState } from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter, Outlet } from "react-router-dom";
import UserContext from "./component/UserContext";
import store from "./utils/store";
import { Provider } from "react-redux";
import Cart from "./component/Cart";

const Instamart = React.lazy(() => import("./component/Instamart"));

const AppLayout = () => {
  const [newUser, setNewUser] = useState({
    name: "Phanishwar Nath",
    email: "abc@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: newUser, setNewUser: setNewUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default AppRouter;
