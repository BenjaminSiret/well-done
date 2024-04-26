import { useTasks } from "@/contexts/TasksContext";
import { Link } from "react-router-dom";
import TaskCard from "@/components/TaskCard";

const Tasks = () => {
  const { state } = useTasks();
  const { tasks, isLoading } = state;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <h2 className="mt-10 text-center text-5xl font-bold text-transparent gradient-text">
        Wall of Success
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7">
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskCard task={task} />
          </li>
        ))}
      </ul>
      <Link to="/">HOME</Link>
    </>
  );
};

export default Tasks;
