import AchievementForm from "@/components/AchievementForm";
import { Button } from "@/components/ui/button";
import { useAchievements } from "@/contexts/AchievementsContext";
import { pluralize } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const { achievements, isLoading } = useAchievements();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormAnimation = () => {
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 1500);
  };

  const renderAchievementsInfos = () => {
    if (isLoading) {
      return <div className="text-center p-2 min-h-16">Loading...</div>;
    }

    if (achievements.length > 0) {
      return (
        <div className="text-center p-2">
          You have {achievements.length} {pluralize(achievements.length, "milestone", "milestones")}{" "}
          reached! Continue on your path of success!
        </div>
      );
    }
  };

  return (
    <>
      <h1
        className={`mt-10 text-transparent text-6xl font-extrabold text-center gradient-text ${
          isFormSubmitted ? "animate-gradient" : ""
        }`}
      >
        Well done!
      </h1>
      <img className="gradient-text" src="test.png" alt="" />
      <h2 className="text-center text-3xl">Start tracking your achievements today</h2>
      {renderAchievementsInfos()}
      <AchievementForm newAchievementAnimationHandler={handleFormAnimation} />
      <Button variant="link">
        <Link to="/achievements">ACHIEVEMENTS</Link>
      </Button>
    </>
  );
};

export default Home;
