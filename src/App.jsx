import Footer from "@/components/Footer";
import { AchievementsProvider } from "@/contexts/AchievementsContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Achievements from "@/pages/Achievements";
import Home from "@/pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainMenu from "./components/MainMenu";

export default function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AchievementsProvider>
          <div className="flex flex-col min-h-screen bg-[]">
            <MainMenu />
            <main className="flex flex-col flex-grow items-center justify-center space-y-5 md:space-y-8 lg:space-y-11">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/achievements" element={<Achievements />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AchievementsProvider>
      </ThemeProvider>
    </Router>
  );
}
