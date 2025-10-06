import { useState } from 'react';
import { Title } from './components/Title';

function App() {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem('task')) || [],
  );

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task));
  }, [task]);
  function onTaskClick(taskId) {
    const newTasks = task.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTask(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = task.filter((task) => task.id !== taskId);
    setTask(newTask);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTask([...task, newTask]);
  }
  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center text-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={task}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
