import ReactDOM from "react-dom/client";
import ThemeProvider from "./providers/theme/ThemeProvider";
import DeviceProvider from "./providers/device/DeviceProvider";
import ResolutionProvider from "./providers/resolution/ResolutionProvider";
import Router from "./Router";
import ProjectsProvider from "./providers/projects/ProjectsProvider";
import { ProjectProvider } from "./providers/project/ProjectProvider";
import NavigationProvider from "./providers/navigation/NavigationProvider";
import "./font.css";
import ScrollDownProvider from "./providers/scrollDown/ScrollDownProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <DeviceProvider>
      <ResolutionProvider>
        <ProjectsProvider>
          <ProjectProvider>
            <NavigationProvider>
              <ScrollDownProvider>
                <Router />
              </ScrollDownProvider>
            </NavigationProvider>
          </ProjectProvider>
        </ProjectsProvider>
      </ResolutionProvider>
    </DeviceProvider>
  </ThemeProvider>
);
