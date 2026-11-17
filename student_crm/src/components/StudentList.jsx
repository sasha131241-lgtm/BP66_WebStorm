import StudentCard from "./StudentCard";

function StudentsList({ students }) {
    // 6. Сообщение при пустом списке
    if (!students || students.length === 0) {
        return <p className="empty-message">Список студентов пуст.</p>;
    }

    return (
        <section className="students-section">
            <h2>Наши студенты</h2>
            {/* 7. Количество студентов, вычисляемое из длины массива */}
            <p className="students-count">Всего студентов: {students.length}</p>

            <div className="students-list">
                {students.map((student) => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>
        </section>
    );
}

export default StudentsList;