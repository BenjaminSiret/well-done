import { createContext, useReducer, useEffect, useContext } from "react";
import supabase from "./supabaseClient";

const TasksContext = createContext();

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "GET_TASKS_START":
      return { ...state, isLoading: true };
    case "GET_TASKS_SUCCESS":
      return { ...state, isLoading: false, tasks: action.payload };
    case "GET_TASKS_FAIL":
      return { ...state, isLoading: false, error: action.payload };
    case "ADD_TASK_START":
      return { ...state, isLoading: true };
    case "ADD_TASK_SUCCESS":
      return { ...state, isLoading: false, tasks: [...state.tasks, action.payload] };
    case "ADD_TASK_FAIL":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const getTasks = async () => {
    dispatch({ type: "GET_TASKS_START" });
    const { data, error } = await supabase.from("tasks").select();

    if (error) {
      dispatch({ type: "GET_TASKS_FAIL", payload: error.message });
      return;
    } else {
      dispatch({ type: "GET_TASKS_SUCCESS", payload: data });
    }
  };

  const addTask = async (taskData) => {
    dispatch({ type: "ADD_TASK_START" });
    const { data, error } = await supabase.from("tasks").insert([taskData]).select()

    if (error) {
      dispatch({ type: "ADD_TASK_FAIL", payload: error.message });
      return;
    } else {
      dispatch({ type: "ADD_TASK_SUCCESS", payload: data[0] });
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return <TasksContext.Provider value={{ state, dispatch, addTask }}>{children}</TasksContext.Provider>;
};

const useTasks = () => {
  return useContext(TasksContext);
};

export { TasksProvider, useTasks };
