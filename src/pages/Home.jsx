import { useState } from "react";
import { useTasks } from "@/contexts/TasksContext";
import { Link } from "react-router-dom";
import TaskForm from "@/components/TaskForm";
import { Button } from "@/components/ui/button";
import { pluralize } from "@/lib/utils";

const Home = () => {
  const { state } = useTasks();
  const { tasks, isLoading } = state;
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = async () => {
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
        tasks.length > 0 && (
          <div className="text-center p-2">
            You have {tasks.length} {pluralize(tasks.length, "milestone", "milestones")} reached!
            Continue on your path of success!
          </div>
        )
      )}
      <TaskForm newTaskHandler={handleFormSubmit} />
      <Button variant="link">
        <Link to="/tasks">TASKS</Link>
      </Button>
    </>
  );
};

export default Home;
