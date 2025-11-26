import React, { useState, useEffect } from 'react'; // 1. Importer useEffect
import './App.css';

const API_URL = 'http://localhost:1337/task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');

  // 2. Charger les tâches au démarrage
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Erreur de chargement:", err));
  }, []); // [] = exécuté une seule fois

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    
    const newTask = {
      id: Date.now(),
      title: newTodoText,
      isCompleted: false,
    };
    
    setTasks([...tasks, newTask]);
    setNewTodoText('');
  };

  return (
    <div className="App-container">
      <h1>Liste des Tâches</h1>
      
      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          className="task-input"
          placeholder="Nouvelle tâche..."
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
      
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
