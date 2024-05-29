import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Provider from "./providers/game/Provider";
import Doodle from "./pages/Doodle";
import Tetris from "./pages/Tetris";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider>
        <Home />
      </Provider>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/doodle",
    element: <Doodle />,
  },
  {
    path: "/tetris",
    element: <Tetris />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
