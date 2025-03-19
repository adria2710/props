const Task = ({ task, deleteTask, toggleCompleteTask }) => {
    return (
        <li className="task-item">
            <span
                className={task.completed ? "completed" : ""}
                onClick={() => toggleCompleteTask(task.id)}
            >
                {task.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>Eliminar</button>
        </li>
    );
};

export default Task;