import AchievementCard from "@/components/AchievementCard";
import { useAchievements } from "@/contexts/AchievementsContext";

const Achievements = () => {
  const { achievements, isLoading } = useAchievements();

  return (
    <div className="flex flex-col items-center gap-8">
      {isLoading && <div>Loading...</div>}
      <h2 className="mt-6 text-center text-4xl font-bold text-transparent gradient-text">
        Wall of Success
      </h2>
      <div className="overflow-y-scroll max-h-[300px]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
          {achievements.map((achievement) => (
            <li key={achievement.id}>
              <AchievementCard achievement={achievement} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
