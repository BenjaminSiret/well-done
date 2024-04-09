import { useEffect } from "react";
import { useTasks} from "@/utils/TasksContext";

export default function Tasks () {
  const { state, dispatch } = useTasks();
  const { tasks, isLoading } = state;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </>
  );
}
