function TaskStatistics({ totalCount, completedCount }) {
    const activeCount = totalCount - completedCount;

    return (
        <div className="stats-bar">
            <div className="stat-item">
                <span>Всего задач:</span>
                <strong>{totalCount}</strong>
            </div>
            <div className="stat-item">
                <span>Выполнено:</span>
                <strong>{completedCount}</strong>
            </div>
            <div className="stat-item">
                <span>Осталось:</span>
                <strong>{activeCount}</strong>
            </div>
        </div>
    );
}

export default TaskStatistics;