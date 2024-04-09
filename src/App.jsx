import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
        <div className="flex flex-col min-h-screen bg-mesh bg-no-repeat bg-cover">
          <main className="flex flex-col flex-grow items-center justify-center space-y-5 md:space-y-8 lg:space-y-11">
            <RouterProvider router={router} />
          </main>
          <Footer />
        </div>
      </TasksProvider>
    </>
  );
}
