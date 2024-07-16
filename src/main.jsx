import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Doodle from "./pages/Doodle";
import OhMyFood from "./pages/project/ohMyFood/OhMyFood";
import GameOn from "./pages/project/gameOn/GameOn";
import Fisheye from "./pages/project/fisheye/Fisheye";
import LesPetitsPlats from "./pages/project/lesPetitsPlats/LesPetitsPlats";
import Billed from "./pages/project/billed/Billed";
import Kasa from "./pages/project/kasa/Kasa";
import ArgentBank from "./pages/project/argentBank/ArgentBank";
import SportSee from "./pages/project/sportSee/SportSee";
import HRnet from "./pages/project/hrnet/HRnet";
import Booki from "./pages/project/booki/Booki";
import LearnAtHome from "./pages/project/learnAtHome/LearnAtHome";
import ThemeProvider from "./providers/theme/ThemeProvider";
import DeviceProvider from "./providers/device/DeviceProvider";
import Home from "./pages/home/Home";
import DoodleProvider from "./providers/doodle/DoodleProvider";
import FlappyBird from "./pages/flappy/FlappyBird";
import FlappyProvider from "./providers/flappy/FlappyProvider";
import ResolutionProvider from "./providers/resolution/ResolutionProvider";
import Router from "./Router";
import ProjectsProvider from "./providers/projects/ProjectsProvider";
import { ProjectProvider } from "./providers/project/ProjectProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DoodleProvider>
        <Home />
      </DoodleProvider>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/doodle",
    element: <Doodle />,
  },
  {
    path: "/projects",
    element: (
      <>
        <ResolutionProvider>
          <Projects />
        </ResolutionProvider>
      </>
    ),
  },
  {
    path: "/flappy",
    element: (
      <FlappyProvider>
        <FlappyBird />
      </FlappyProvider>
    ),
  },
  {
    path: "/project/ohmyfood",
    element: <OhMyFood />,
  },
  {
    path: "/project/gameon",
    element: <GameOn />,
  },
  {
    path: "/project/fisheye",
    element: <Fisheye />,
  },
  {
    path: "/project/lespetitsplats",
    element: <LesPetitsPlats />,
  },
  {
    path: "/project/billed",
    element: <Billed />,
  },
  {
    path: "/project/kasa",
    element: <Kasa />,
  },
  {
    path: "/project/argentbank",
    element: <ArgentBank />,
  },
  {
    path: "/project/sportSee",
    element: <SportSee />,
  },
  {
    path: "/project/hrnet",
    element: <HRnet />,
  },
  {
    path: "/project/booki",
    element: <Booki />,
  },
  {
    path: "/project/learnathome",
    element: <LearnAtHome />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <DeviceProvider>
      <ResolutionProvider>
        <ProjectsProvider>
          <ProjectProvider>
            <Router />
          </ProjectProvider>
        </ProjectsProvider>

        {/* <RouterProvider router={router} /> */}
      </ResolutionProvider>
    </DeviceProvider>
  </ThemeProvider>
);
