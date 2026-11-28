import { useState } from "react";
import { initialTasks, presetTitles } from "./data/initialTasks";
import Header from "./components/Header";
import TaskStatistics from "./components/TaskStatisticks.jsx";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("all");

  // 1. Добавление новой задачи с заранее заданным текстом
  const handleAddTask = () => {
    const randomTitle =
        presetTitles[Math.floor(Math.random() * presetTitles.length)];

    const newTask = {
      id: Date.now(), // уникальный ID на основе текущего времени
      title: `${randomTitle} #${tasks.length + 1}`,
      completed: false
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // 2. Удаление одной задачи
  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // 3. Переключение статуса (выполнено / не выполнено)
  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
        prevTasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
    );
  };

  // 4. Очистка всего списка
  const handleClearAll = () => {
    setTasks([]);
  };

  // 5. Дополнительное задание: удалить только выполненные
  const handleDeleteCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  // 6. Вычисление статистики (всегда по полному массиву tasks)
  const totalCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;

  // 7. Задание ADV: фильтрация отображаемого списка
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true; // "all"
  });

  return (
      <div className="app-container">
            <Header />

            <main className="main-content">
                <TaskStatistics
                    totalCount={totalCount}
                    completedCount={completedCount}
                />

              {/* Панель управления: добавление, удаление выполненных и полная очистка */}
              <div className="controls-bar">
                    <button className="btn btn-primary" onClick={handleAddTask}>
                        + Добавить задачу
                    </button>

                    <button
                        className="btn btn-warning"
                        onClick={handleDeleteCompleted}
                        disabled={completedCount === 0}
                    >
                        Удалить выполненные
                    </button>

                    <button
                        className="btn btn-danger"
                        onClick={handleClearAll}
                        disabled={totalCount === 0}
                    >
                        Очистить список
                    </button>
                </div>

              {/* Панель фильтров (Задание ADV) */}
              <div className="filter-bar">
                    <button
                        className={`btn-filter ${filter === "all" ? "active" : ""}`}
                        onClick={() => setFilter("all")}
                    >
                        Все
                    </button>
                    <button
                        className={`btn-filter ${filter === "active" ? "active" : ""}`}
                        onClick={() => setFilter("active")}
                    >
                        Невыполненные
                    </button>
                    <button
                        className={`btn-filter ${filter === "completed" ? "active" : ""}`}
                        onClick={() => setFilter("completed")}
                    >
                        Выполненные
                    </button>
                </div>

                <TaskList
                    tasks={filteredTasks}
                    totalTasksCount={totalCount}
                    onToggle={handleToggleTask}
                    onDelete={handleDeleteTask}
                />
            </main>

            <Footer />
        </div>
  );
}

export default App;