import React from 'react';
import './App.css';

function App() {
  const name = "Alex";
  const age = 25;
  const city = "Netanya";
  const courseName = "Full-Stack Web Development";
  const totalLessons = 100;
  const completedLessons = 50;

  const remainingLessons = totalLessons - completedLessons;

  return (
      <div className="profile-container">
      <h1 className="profile-title">Мой учебный профиль</h1>

      <div className="profile-card">
        <div className="profile-field">
          <span className="label">Имя:</span>
          <span className="value">{name}</span>
        </div>

        <div className="profile-field">
          <span className="label">Возраст:</span>
          <span className="value">{age} лет</span>
        </div>

        <div className="profile-field">
          <span className="label">Город:</span>
          <span className="value">{city}</span>
        </div>

        <div className="profile-field">
          <span className="label">Курс:</span>
          <span className="value">{courseName}</span>
        </div>

        <div className="profile-field">
          <span className="label">Пройдено занятий:</span>
          <span className="value">{completedLessons} из {totalLessons}</span>
        </div>

        <div className="profile-field highlight">
          <span className="label">Осталось занятий:</span>
          <span className="value">{remainingLessons}</span>
        </div>
      </div>
    </div>
  );
}

export default App;