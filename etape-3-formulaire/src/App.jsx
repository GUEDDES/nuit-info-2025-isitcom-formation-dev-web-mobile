import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  
  // 1. État pour le texte de l'input
  const [newTodoText, setNewTodoText] = useState('');

  // 2. Fonction pour ajouter une tâche
  const handleAddTask = (e) => {
    e.preventDefault(); // Empêche le refresh
    
    if (!newTodoText.trim()) return; // Ignore les textes vides
    
    const newTask = {
      id: Date.now(), // ID temporaire unique
      title: newTodoText,
      isCompleted: false,
    };
    
    setTasks([...tasks, newTask]); // Ajoute la nouvelle tâche
    setNewTodoText(''); // Vide le champ
  };

  return (
    <div className="App-container">
      <h1>Liste des Tâches</h1>
      
      {/* 3. Formulaire pour ajouter */}
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
