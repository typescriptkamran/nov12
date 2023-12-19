import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm'; // Adjust the path accordingly
import data, { Task } from '@/api/saveData';

const AddNewTask = ({onAddTask}: {onAddTask: (task: Task) => void}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddTask = (task: Task) => {
    onAddTask({...task, id: Date.now()})
    // Handle adding the task to your data or perform any other necessary actions
    console.log('Task added:', task);
    setIsFormVisible(false); // Close the form after saving
  };

  const openForm = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div>
      <button onClick={openForm} className="bg-green-500 text-white font-bold py-2 px-4 rounded">
        Add New Task
      </button>

      {isFormVisible && (
        <div className="overlay">
          <div className="modal">
            <button onClick={closeForm} className="close-btn">
              &times;
            </button>
            <AddTaskForm onAddTask={handleAddTask} />
          </div>
        </div>
      )}

      {/* Other content of your page */}
    </div>
  );
};

export default AddNewTask;
