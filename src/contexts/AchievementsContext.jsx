import { createContext, useReducer, useEffect, useContext } from "react";
import supabase from "../lib/supabaseClient";

const AchievementsContext = createContext();

const initialState = {
  achievements: [],
  isLoading: false,
  error: null,
};

const achievementsReducer = (state, action) => {
  switch (action.type) {
    case "GET_ACHIEVEMENTS_START":
      return { ...state, isLoading: true };
    case "GET_ACHIEVEMENTS_SUCCESS":
      return { ...state, isLoading: false, achievements: action.payload };
    case "GET_ACHIEVEMENTS_FAIL":
      return { ...state, isLoading: false, error: action.payload };
    case "ADD_ACHIEVEMENT_START":
      return { ...state, isLoading: true };
    case "ADD_ACHIEVEMENT_SUCCESS":
      return { ...state, isLoading: false, achievements: [...state.achievements, action.payload] };
    case "ADD_ACHIEVEMENT_FAIL":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

const AchievementsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(achievementsReducer, initialState);

  const getAchievements = async () => {
    dispatch({ type: "GET_ACHIEVEMENTS_START" });
    const { data, error } = await supabase.from("achievements").select();

    if (error) {
      dispatch({ type: "GET_ACHIEVEMENTS_FAIL", payload: error.message });
      return;
    } else {
      dispatch({ type: "GET_ACHIEVEMENTS_SUCCESS", payload: data });
    }
  };

  const addAchievement = async (achievementData) => {
    dispatch({ type: "ADD_ACHIEVEMENT_START" });
    const { data, error } = await supabase.from("achievements").insert([achievementData]).select();

    if (error) {
      dispatch({ type: "ADD_ACHIEVEMENT_FAIL", payload: error.message });
      return;
    } else {
      dispatch({ type: "ADD_ACHIEVEMENT_SUCCESS", payload: data[0] });
    }
  };

  useEffect(() => {
    getAchievements();
  }, []);

  return (
    <AchievementsContext.Provider value={{ state, dispatch, addAchievement }}>
      {children}
    </AchievementsContext.Provider>
  );
};

const useAchievements = () => {
  return useContext(AchievementsContext);
};

export { AchievementsProvider, useAchievements };
