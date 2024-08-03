import { useAchievements } from "@/contexts/AchievementsContext";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";
import DesktopCard from "./DesktopCard";
import MobileCard from "./MobileCard";

const AchievementCard = ({ achievement }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { updateAchievement } = useAchievements();

  const handleSave = async (updatedAchievement) => {
    await updateAchievement(updatedAchievement);
    setOpen(false);
  };

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
        onSave={handleSave}
      />
    );
  }

  return <MobileCard achievement={achievement} open={open} setOpen={setOpen} />;
};

export default AchievementCard;
