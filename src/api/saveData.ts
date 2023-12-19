// Define the Task interface
export interface Task {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    time?: string;
  }
  
  // Dummy data for the todo app
  const data: Task[] = [
    {
      id: 1,
      title: 'Create dummy data',
      description: 'Create dummy data for the todo app',
      completed: false,
      time: "evening"
    },
    {
      id: 2,
      title: 'Build Todo App UI',
      description: 'Build the UI for the todo app',
      completed: true,
    },
    {
      id: 3,
      title: 'Integrate with backend',
      description: 'Integrate with the backend for the todo app',
      completed: false,
    },
    {
      id: 4,
      title: 'Add user authentication',
      description: 'Add user authentication for the todo app',
      completed: false,
    },
  ];
  
  export default data;
  