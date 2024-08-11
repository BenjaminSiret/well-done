import { useMediaQuery } from "@/hooks/use-media-query";
import DeskTopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const MainMenu = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) return <DeskTopMenu />;

  return <MobileMenu />;
};
export default MainMenu;
