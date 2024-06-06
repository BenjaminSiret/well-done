import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TasksProvider } from "@/contexts/TasksContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";
import Tasks from "@/pages/Tasks";
import Footer from "@/components/Footer";
import MainMenu from "./components/MainMenu";

export default function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <TasksProvider>
          <div className="flex flex-col min-h-screen bg-[]">
            <MainMenu />
            <main className="flex flex-col flex-grow items-center justify-center space-y-5 md:space-y-8 lg:space-y-11">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </TasksProvider>
      </ThemeProvider>
    </Router>
  );
}
