import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import React, { Suspense } from "react";
import TestLoader from "./components/loader/TestLoader";

const About = React.lazy(async () => {
  return Promise.all([
    import("./pages/about/About"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports);
});
const Contact = React.lazy(async () => {
  return Promise.all([
    import("./pages/contact/Contact"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports);
});
const Projects = React.lazy(async () => {
  return Promise.all([
    import("./pages/projects/Projects"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports);
});
const Project = React.lazy(async () => {
  return Promise.all([
    import("./pages/project/Project"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports);
});

const router = createBrowserRouter([
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projets",
    element: <Projects />,
  },
  {
    path: "/projet/:id",
    element: <Project />,
  },
  {
    path: "/",
    element: <About />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

const Router = () => {
  return (
    <>
      <Suspense fallback={<TestLoader />}>
        <>
          <RouterProvider router={router} />
        </>
      </Suspense>
    </>
  );
};

export default Router;
