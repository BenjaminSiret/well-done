import { useTasks } from "@/contexts/TasksContext";
import { Link } from "react-router-dom";
import TaskCard from "@/components/TaskCard";

export default function Tasks() {
  const { state } = useTasks();
  const { tasks, isLoading } = state;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <ul className="flex flex-col gap-2">
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskCard task={task} />
          </li>
        ))}
      </ul>
      <Link to="/">HOME</Link>
    </>
  );
}
