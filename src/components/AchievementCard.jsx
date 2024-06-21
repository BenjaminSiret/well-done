import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import DesktopCard from "./DesktopCard";
import MobileCard from "./MobileCard";

const AchievementCard = ({ achievement }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleClose = () => {
    setOpen(false);
  };

  if (isDesktop) {
    return (
      <DesktopCard
        achievement={achievement}
        open={open}
        setOpen={setOpen}
        onClickFunction={handleClose}
      />
    );
  }

  return <MobileCard achievement={achievement} open={open} setOpen={setOpen} />;
};

export default AchievementCard;
