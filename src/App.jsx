import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (taskText) => {
    if (taskText.trim() === '') return; 
    const newTask = {
      id: tasks.length + 1, 
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleCompleteTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app-container">
      <h1>Lista de Tareas</h1>
      <AddTaskForm addTask={addTask} />
      <ul className="task-list">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleteTask={toggleCompleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
