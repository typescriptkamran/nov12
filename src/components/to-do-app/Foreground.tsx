// Import necessary modules and components

import React, { useState, useEffect } from "react";
import data from "@/api/saveData";
import Card from "./Card";
import { useRef } from "react";
import AddNewTask from "./AddNewTask";

// Define the Task type
interface Task {
  // Define the structure of your task object
  // Adjust the properties based on your actual task structure
  id: number;
  // ... other properties
}

// Define the Foreground component
const Foreground: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Load tasks from local storage or use default data
  const initialTasks: Task[] = JSON.parse(localStorage.getItem("tasks")) || data;

  // Use React.FC to define the component's prop types
  const [tasks, setTasks] = useState<JSX.Element[]>(
    initialTasks.map((item: Task) => <Card key={item.id} data={item} referance={ref} />)
  );

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
        className="flex-col gap-5 absolute top-0 left-0 bg-zinc-800/50 z-[3] h-screen w-screen p-5"
      >
        <div>
          <AddNewTask onAddTask={handleAddTask} />
        </div>
        <div>
          <div className="flex gap-5">{tasks}</div>
        </div>
      </div>
    </div>
  );
};

export default Foreground;
