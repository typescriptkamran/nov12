// Define the Task interface
interface Task {
    id: number;
    title: string;
    completed: boolean;
  }
  
  // Dummy data for the todo app
  const dummyData: Task[] = [
    {
      id: 1,
      title: 'Create dummy data',
      completed: false,
    },
    {
      id: 2,
      title: 'Build Todo App UI',
      completed: true,
    },
    {
      id: 3,
      title: 'Integrate with backend',
      completed: false,
    },
    {
      id: 4,
      title: 'Add user authentication',
      completed: false,
    },
  ];
  
  export default dummyData;
  