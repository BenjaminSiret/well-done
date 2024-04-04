import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import { TasksProvider } from "./utils/TasksContext";
import Home from "@/pages/Home";
import Tasks from "@/pages/Tasks";
import Footer from "@/components/Footer";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/tasks", element: <Tasks /> },
]);

export default function App() {
  return (
    <>
      <TasksProvider>
        <div className="flex flex-col min-h-screen">
          <ShaderGradientCanvas
            importedfiber={{ ...fiber, ...drei, ...reactSpring }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              pointerEvents: "none",
              zIndex: -1,
            }}
          >
            <ShaderGradient
              control="query"
              urlString="https://www.shadergradient.co/customize?animate=off&axesHelper=off&brightness=1.2&cAzimuthAngle=170&cDistance=4.4&cPolarAngle=70&cameraZoom=1&color1=%2394ffd1&color2=%236bf5ff&color3=%23ffffff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0.9&positionZ=-0.3&range=enabled&rangeEnd=39.6&rangeStart=0&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.2&uStrength=3.4&uTime=0&wireframe=false"
            />
          </ShaderGradientCanvas>
          <main className="flex flex-col flex-grow items-center justify-center space-y-5 md:space-y-8 lg:space-y-11">
            <RouterProvider router={router} />
          </main>
          <Footer />
        </div>
      </TasksProvider>
    </>
  );
}
