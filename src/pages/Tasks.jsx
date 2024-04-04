import { useEffect } from "react";

export default function Tasks() {
  // useEffect(() => {
  //   getTasks();
  // }, []);

  // async function getTasks() {
  //   const { data } = await supabase.from("tasks").select();
  //   setTasks(data);
  // }

  return (
    <>
      <ul>
        <li>task1</li>
        <li>task2</li>
        <li>task3</li>
      </ul>
    </>
  );
}
