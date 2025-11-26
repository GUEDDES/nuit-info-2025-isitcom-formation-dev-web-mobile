import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:1337/task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');

  // Charger les tâches au démarrage
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Erreur de chargement:", err));
  }, []);

  // 🆕 Fonction améliorée avec POST
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    
    try {
      // 1. Envoyer la requête POST au serveur
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTodoText,
          isCompleted: false,
        }),
      });
      
      // 2. Récupérer la tâche créée par le serveur
      const createdTask = await response.json();
      
      // 3. Ajouter la tâche à notre état local
      setTasks([...tasks, createdTask]);
      setNewTodoText('');
    } catch (err) {
      console.error("Erreur lors de l'ajout:", err);
    }
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
