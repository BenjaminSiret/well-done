import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
const MobileMenu = () => {
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

export default MobileMenu;
