import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";

const AchievementsContext = createContext();

const AchievementsProvider = ({ children }) => {
  const [achievements, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAchievements = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.from("achievements").select();

    if (error) {
      setError(error.message);
    } else {
      setAchievements(data);
    }

    setIsLoading(false);
  };

  const addAchievement = async (achievementData) => {
    setIsLoading(true);
    const { data, error } = await supabase.from("achievements").insert([achievementData]).select();

    if (error) {
      setError(error.message);
    } else {
      setAchievements((prevAchievements) => [...prevAchievements, data[0]]);
    }

    setIsLoading(false);
  };

  const updateAchievement = async (achievementData) => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("achievements")
      .update(achievementData)
      .eq("id", achievementData.id)
      .select();

    if (error) {
      setError(error.message);
    } else {
      setAchievements((prevAchievements) =>
        prevAchievements.map((ach) => (ach.id === data[0].id ? data[0] : ach))
      );
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getAchievements();
  }, []);

  return (
    <AchievementsContext.Provider
      value={{ achievements, isLoading, error, addAchievement, updateAchievement }}
    >
      {children}
    </AchievementsContext.Provider>
  );
};

const useAchievements = () => {
  return useContext(AchievementsContext);
};

export { AchievementsProvider, useAchievements };
