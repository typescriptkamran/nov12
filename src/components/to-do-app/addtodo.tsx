"use client";
import React, { useState } from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const generateId = (): number => {
  return new Date().getTime();
};

interface AddTodoFormProps {
  onAddTodo: (title: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleSubmit = () => {
    if (newTodo.trim() !== '') {
      onAddTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form>
      <label className="block mb-2" htmlFor="newTodo">
        Todo Title:
      </label>
      <input
        type="text"
        id="newTodo"
        className="w-full border p-2 mb-4"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Add Todo
      </button>
    </form>
  );
};

interface TodoListProps {
  tasks: Task[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTodo = (title: string) => {
    const newTask: Task = {
      id: generateId(),
      title,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="container mx-auto mt-8">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowAlert(true)}
      >
        Add New Todo
      </button>

      {showAlert && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Add New Todo</h2>
            <AddTodoForm onAddTodo={handleAddTodo} />
            <button
              type="button"
              className="ml-2 text-gray-600 hover:text-gray-800"
              onClick={() => setShowAlert(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <TodoList tasks={tasks} />
    </div>
  );
};

export default TodoApp;
