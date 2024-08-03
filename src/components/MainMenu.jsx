import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/use-media-query";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const MainMenu = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop)
    return (
      <div className="flex">
        <div>Desktop</div>
        <ThemeToggle className="ml-auto mt-2 mr-2" />
      </div>
    );

  return (
    <div className="flex p-1 sticky top-0">
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon className="w-5 h-5" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <Link to="/">
            <SheetTrigger>Home</SheetTrigger>
          </Link>
          <Link to="/achievements">
            <SheetTrigger>Achievements</SheetTrigger>
          </Link>
        </SheetContent>
      </Sheet>
      <ThemeToggle className="ml-auto" />
    </div>
  );
};
export default MainMenu;
