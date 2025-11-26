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

  // Ajouter une tâche
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTodoText,
          isCompleted: false,
        }),
      });
      
      const createdTask = await response.json();
      setTasks([...tasks, createdTask]);
      setNewTodoText('');
    } catch (err) {
      console.error("Erreur lors de l'ajout:", err);
    }
  };

  // 🆕 Marquer comme complétée / Activer
  const handleToggleTask = async (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    
    try {
      const response = await fetch(`${API_URL}/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          isCompleted: !task.isCompleted,
        }),
      });
      
      const updatedTask = await response.json();
      setTasks(tasks.map(t => t.id === taskId ? updatedTask : t));
    } catch (err) {
      console.error("Erreur lors du toggle:", err);
    }
  };

  // 🆕 Supprimer une tâche
  const handleDeleteTask = async (taskId) => {
    try {
      await fetch(`${API_URL}/${taskId}`, {
        method: 'DELETE',
      });
      
      setTasks(tasks.filter(t => t.id !== taskId));
    } catch (err) {
      console.error("Erreur lors de la suppression:", err);
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
          <li 
            key={task.id} 
            className={task.isCompleted ? 'completed' : ''}
            onClick={() => handleToggleTask(task.id)}
          >
            <span>{task.title}</span>
            <button 
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteTask(task.id);
              }}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
