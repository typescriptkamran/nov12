// components/AddTaskForm.tsx
import { useState } from 'react';
import dummyData from './data/data';

interface AddTaskFormProps {
  onAddTask: (task: any) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState<any>({
    id: 0,
    title: '',
    completed: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask((prevTask: any) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.title.trim() !== '') {
      onAddTask({ ...newTask, id: Date.now() });
      setNewTask({ id: 0, title: '', completed: false });
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
        Completed:
        <input
          type="checkbox"
          name="completed"
          checked={newTask.completed}
          onChange={() => setNewTask((prevTask: any) => ({ ...prevTask, completed: !prevTask.completed }))}
          className="mt-1"
        />
      </label>
      <br />
      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
