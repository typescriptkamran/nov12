// components/AddTaskForm.tsx
import { useState } from 'react';
import data,{ Task }  from '@/api/saveData';

interface AddTaskFormProps {
  onAddTask: (task: Task) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState<Task>({
    id: 0,
    title: '',
    completed: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.title.trim() !== '') {
      onAddTask({ ...newTask, id: Date.now() });
      setNewTask({ id: 0, title: '', completed: false });
      // Save data to the JSON file
      saveData([...data, { ...newTask, id: Date.now() }]);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="my-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Title:
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleInputChange}
          className="w-full border p-2 mt-1"
        />
      </label>
      <br />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Description:
        <input
          type="text"
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
          className="w-full border p-2 mt-1"
        />
      </label>
      <br />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        TAT:
        <input
          type="text"
          name="time"
          value={newTask.time}
          onChange={handleInputChange}
          className="w-full border p-2 mt-1"
        />
      </label>
      <br />
      {/* <label className="block text-gray-700 text-sm font-bold mb-2">
        Completed:
        <input
          type="checkbox"
          name="completed"
          checked={newTask.completed}
          onChange={() => setNewTask((prevTask: any) => ({ ...prevTask, completed: !prevTask.completed }))}
          className="mt-1"
        />
      </label> */}
      <br />
      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Save Task
      </button>
    </form>
  );
};

export default AddTaskForm;
function saveData(args: any[]) {
  console.log(args)
}

