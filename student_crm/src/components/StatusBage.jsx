function StudyStatus({ isActive, age }) {
    return (
        <div className="study-status">
            <span className={isActive ? "status-active" : "status-paused"}>
                {isActive ? "[Активен]" : "[Пауза]"}
            </span>
            {age < 18 && <p className="minor-warning">Несовершеннолетний студент</p>}
        </div>
    );
}

export default StudyStatus;