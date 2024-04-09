import { useTasks } from "@/contexts/TasksContext";
import { Link } from "react-router-dom";

export default function Tasks() {
  const { state } = useTasks();
  const { tasks, isLoading } = state;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      <Link to="/">HOME</Link>
    </>
  );
}
