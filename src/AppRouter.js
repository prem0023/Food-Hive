import "./style.css";
import React, { createContext, Suspense, useState } from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter, Outlet } from "react-router-dom";
import UserContext from "./component/UserContext";

const Instamart = React.lazy(() => import("./component/Instamart"));

const AppLayout = () => {
  const [newUser, setNewUser] = useState({
    name: "Phanishwar Nath",
    email: "abc@gmail.com",
  });

  return (
    <UserContext.Provider value={{ user: newUser }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
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
    ],
  },
]);

export default AppRouter;
