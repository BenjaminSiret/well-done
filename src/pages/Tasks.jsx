import { useTasks } from "@/contexts/TasksContext";
import { Link } from "react-router-dom";
import TaskCard from "@/components/TaskCard";
import { Button } from "@/components/ui/button";

const Tasks = () => {
  const { state } = useTasks();
  const { tasks, isLoading } = state;

  return (
    <div className="flex flex-col items-center gap-8">
      {isLoading && <div>Loading...</div>}
      <h2 className="mt-6 text-center text-4xl font-bold text-transparent gradient-text">
        Wall of Success
      </h2>
      <div className="overflow-y-scroll max-h-[300px]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskCard task={task} />
            </li>
          ))}
        </ul>
      </div>
      <Button variant="link">
        <Link to="/">HOME</Link>
      </Button>
    </div>
  );
};

export default Tasks;
