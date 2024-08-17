import { AchievementsProvider } from "@/contexts/AchievementsContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Achievements from "@/pages/Achievements";
import Home from "@/pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
export default function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AchievementsProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/achievements" element={<Achievements />} />
            </Route>
          </Routes>
        </AchievementsProvider>
      </ThemeProvider>
    </Router>
  );
}
