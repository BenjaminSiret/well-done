import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
const DesktopMenu = () => {
  return (
    <div className="inline-flex m-2">
      <img src="/checkbox.png" alt="checkbox" className="w-8" />
      <Tabs defaultValue="home" className="m-auto">
        <TabsList>
          <Link to="/">
            <TabsTrigger value="home">Home</TabsTrigger>
          </Link>
          <Link to="/achievements">
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>
      <ThemeToggle />
    </div>
  );
};

export default DesktopMenu;
