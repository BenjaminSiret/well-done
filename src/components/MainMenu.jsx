"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export default function MainMenu () {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? <div>Desktop</div> :
    <div>
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon/>
        </SheetTrigger>
        <SheetContent>
          <Link to="/">Home</Link>
        </SheetContent>
      </Sheet>
    </div>;
};
