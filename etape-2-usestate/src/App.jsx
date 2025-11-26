import React, { useState } from 'react'; // 1. Importer useState
import './App.css';

function App() {
  // 2. Remplacer la constante par un état
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Apprendre React', isCompleted: true },
    { id: 2, title: 'Boire un café', isCompleted: false },
  ]);

  return (
    <div className="App-container">
      <h1>Liste des Tâches</h1>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
