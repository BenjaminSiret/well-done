"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const MainMenu = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <div>Desktop</div>
  ) : (
    <div className="p-1 sticky top-0">
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon className="w-5 h-5" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <Link to="/">
            <SheetTrigger>Home</SheetTrigger>
          </Link>
          <Link to="/tasks">
            <SheetTrigger>Tasks</SheetTrigger>
          </Link>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MainMenu;
