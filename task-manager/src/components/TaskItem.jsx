function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li className={`task-item ${task.completed ? "completed" : ""}`}>
            <div className="task-info">
                <span className="task-status">
                    {task.completed ? "✅ Выполнено" : "⏳ В процессе"}
                </span>
                <span className="task-title">{task.title}</span>
            </div>

            <div className="task-actions">
                <button
                    className="btn btn-toggle"
                    onClick={() => onToggle(task.id)}
                >
                    {task.completed ? "Вернуть в работу" : "Выполнить"}
                </button>
                <button
                    className="btn btn-delete"
                    onClick={() => onDelete(task.id)}
                >
                    Удалить
                </button>
            </div>
        </li>
    );
}

export default TaskItem;