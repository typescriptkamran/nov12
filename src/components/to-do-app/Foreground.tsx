// Import necessary modules and components
"use client"

import React, { useState, useEffect } from "react";
import data from "@/api/saveData";
import Card from "./Card";
import { useRef } from "react";
import AddNewTask from "./AddNewTask";
import { Task } from "@/api/saveData";

// Define the Foreground component
const Foreground: React.FC = () => {
  const ref = useRef<HTMLDivElement | !null>(null);

  // Load tasks from local storage or use default data
  const initialTasks: Task[] = JSON.parse(localStorage.getItem("tasks")) || data;

  // Use React.FC to define the component's prop types
  const [tasks, setTasks] = useState<JSX.Element[]>(
    initialTasks.map((item: Task) => <Card key={item.id} data={item} referance={ref} />)
  );
  
  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskId));
  };

  useEffect(() => {
    // Save tasks to local storage whenever tasks state changes
    localStorage.setItem("tasks", JSON.stringify(tasks.map((task) => task.props.data)));
  }, [tasks]);

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
