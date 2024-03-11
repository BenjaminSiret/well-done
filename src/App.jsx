import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const newTaskHandler = (data) => {
    setTasks((prevTasks) => {
      return [...prevTasks, data];
    });
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex flex-col flex-grow items-center justify-center space-y-5 md:space-y-8 lg:space-y-11">
          <h1 className="text-7xl font-extrabold text-center">Well done!</h1>
          <h2 className="text-center text-3xl">Start tracking your achievements today</h2>
          <TaskForm newTaskHandler={newTaskHandler} />
          {tasks &&
            tasks.map((task, index) => {
              return (
                <div key={index} className="flex justify-center gap-5">
                  <TaskCard task={task} />
                </div>
              );
            })}
        </main>
        <Footer/>
      </div>
    </>
  );
}
