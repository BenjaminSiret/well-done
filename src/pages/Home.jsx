import { useState } from "react";
import { useTasks } from "@/utils/TasksContext";
import supabase from "@/utils/supabaseClient";
import TaskForm from "@/components/TaskForm";

export default function Home() {
  const { state, addTask } = useTasks();
  const { tasks, isLoading } = state;
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const newTaskHandler = async (taskData) => {
    await addTask(taskData);

    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 1500);
  };

  return (
    <>
      <h1
        className={`text-transparent text-6xl font-extrabold text-center gradient-text ${
          isFormSubmitted ? "animate-gradient" : ""
        }`}
      >
        Well done!
      </h1>

      <h2 className="text-center text-3xl">Start tracking your achievements today</h2>
      {isLoading && <div>Loading...</div>}
      {tasks.length > 0 && (
        <div>You have {tasks.length} milestones reached! Continue on your path of success!</div>
      )}
      <TaskForm newTaskHandler={newTaskHandler} />
    </>
  );
}
