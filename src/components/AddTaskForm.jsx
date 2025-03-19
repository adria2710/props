import { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(taskText);
        setTaskText(''); 
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Añadir una nueva tarea"
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default AddTaskForm;
