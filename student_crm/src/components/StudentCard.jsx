import StudyStatus from "./StatusBage.jsx";

function StudentCard({ student }) {
    return (
        <div className="student-card">
            <div className="card-header">
                <h3>{student.name}</h3>
                <StudyStatus isActive={student.isActive} age={student.age} />
            </div>
            <p>Возраст: {student.age}</p>
            <p>Группа: {student.group}</p>
        </div>
    );
}

export default StudentCard;