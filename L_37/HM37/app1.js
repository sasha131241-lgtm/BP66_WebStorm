import React from 'react';
import './style.css';

function App1(){
    const name = "Alex";
    const age = 25;
    const city = "Netanya";
    const course = "Full Stack Developer";
    const totalLessons = "100 hours of 150";
    const completedLessons = "50";

    const remainingLessons = totalLessons - completedLessons;

    return(
        <div className = "profile-container">
            <h1 className = "profile-title">Мой учебный профиль</h1>

            <div className = "profile-card">
                <div className = "profile-field">
                    <span className = "label">Name:</span>
                    <span className = "value">{name}</span>
                </div>

                <div className="profile-field">
                    <span className="label">Age:</span>
                    <span className="value">{age}</span>
                </div>

                <div className="profile-field">
                    <span className="label">City:</span>
                    <span className="value">{city}</span>
                </div>

                <div className="profile-field">
                    <span className="label">Course:</span>
                    <span className="value">{course}</span>
                </div>

                <div className="profile-field">
                    <span className="label">Remaining Lessons:</span>
                    <span className="value">{remainingLessons}</span>
                </div>

                <div className="profile-field">
                    <span className="label">Completed Lessons:</span>
                    <span className="value">{completedLessons}</span>
                </div>
            </div>
        </div>
    );
}

export default App1;