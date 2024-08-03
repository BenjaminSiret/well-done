import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemeToggle = ({ ...props }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} {...props}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ThemeToggle;
