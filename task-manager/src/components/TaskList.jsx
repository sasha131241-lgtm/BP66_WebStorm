import TaskItem from "./TaskItem";

function TaskList({ tasks, totalTasksCount, onToggle, onDelete }) {
    if (totalTasksCount === 0) {
        return <p className="empty-message">Задач пока нет</p>;
    }

    if (tasks.length === 0) {
        return <p className="empty-message">Нет задач по выбранному фильтру</p>;
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default TaskList;