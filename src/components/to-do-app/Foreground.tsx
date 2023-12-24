// Import necessary modules and components
"use client"

import React, { useState, useEffect } from "react";
import data from "@/api/saveData";
import Card from "./Card";
import { useRef } from "react";
import AddNewTask from "./AddNewTask";
import { Task } from "@/api/saveData";
import { storage } from "./utilis/localstorage";

// Define the Foreground component
const Foreground: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const localStorage = storage();
  let initialTasks: Task[];


  let tasksData = localStorage?.getItem("tasks");
  if (!tasksData) {
    initialTasks = data;
  }
  let parsedData = JSON.parse(tasksData || "[]");
  initialTasks = parsedData

  // Use React.FC to define the component's prop types
  const [tasks, setTasks] = useState<JSX.Element[]>(
    initialTasks.map((item: Task) => <Card key={item.id} data={item} referance={ref} />)
  );
  


  useEffect(() => {
    // Save tasks to local storage whenever tasks state changes
    localStorage?.setItem("tasks", JSON.stringify(tasks.map((task) => task.props.data)));
  }, [tasks, localStorage]);

  const handleAddTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, <Card key={task.id} data={task} referance={ref} />]);
  };

  return (
    <div>
      <div
        ref={ref}
        className="flex flex-col gap-5 absolute top-0 left-0 bg-zinc-800/50 z-[3] h-full w-fu"
      >
        <div>
          <AddNewTask onAddTask={handleAddTask} />
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">{tasks}</div>
        </div>
      </div>
    </div>
  );
};

export default Foreground;
