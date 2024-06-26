import { useState } from "react";
import { useAchievements } from "@/contexts/AchievementsContext";
import { Link } from "react-router-dom";
import AchievementForm from "@/components/AchievementForm";
import { Button } from "@/components/ui/button";
import { pluralize } from "@/lib/utils";

const Home = () => {
  const { state } = useAchievements();
  const { achievements, isLoading } = state;
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormAnimation = async () => {
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 1500);
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
      <h2 className="text-center text-3xl">Start tracking your achievements today</h2>
      {isLoading ? (
        <div className="text-center p-2 min-h-16">Loading...</div>
      ) : (
        achievements.length > 0 && (
          <div className="text-center p-2">
            You have {achievements.length}{" "}
            {pluralize(achievements.length, "milestone", "milestones")} reached! Continue on your
            path of success!
          </div>
        )
      )}
      <AchievementForm newAchievementAnimationHandler={handleFormAnimation} />
      <Button variant="link">
        <Link to="/achievements">ACHIEVEMENTS</Link>
      </Button>
    </>
  );
};

export default Home;
