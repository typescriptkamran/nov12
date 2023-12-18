"use client";
import React, { useState } from "react";
import dummyData from "./data/data";
import Card from "./Card";
import { useRef } from "react";
import AddTaskForm from "./AddTaskForm";

const Foreground = () => {
  
  
  
  const ref = useRef(null);
  
  let data1 = dummyData.map((item, index) => (
    <Card  data={item} referance={ref}/>
  ))

  const [tasks, setTasks] = useState<any[]>(data1);

  const handleAddTask = (task: any) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };
  
  return (
  <div>
      
        
      
    <div ref={ref} className="flex-col gap-5 absolute top-0 left-0 bg-zinc-800/50 z-[3] h-screen w-screen p-5  ">
      <div>      <AddTaskForm onAddTask={handleAddTask} /> 
        <ul>
          {tasks.map((task) => (
           
           <li key={task.id}>
            {       
            task.title}</li>
          ))}
        </ul>
  
      </div>
     </div>
      <div className="flex gap-5">{data1}</div>
      
    
   </div>
 
   
  );
};

export default Foreground;
