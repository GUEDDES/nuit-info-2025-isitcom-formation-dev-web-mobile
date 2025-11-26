import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [taches, setTaches] = useState([]);
  const [nouvelleTache, setNouvelleTache] = useState('');
  const [chargement, setChargement] = useState(true);

  // Récupération des tâches au chargement
  useEffect(() => {
    fetch('http://localhost:1337/todos')
      .then(response => response.json())
      .then(data => {
        setTaches(data);
        setChargement(false);
      })
      .catch(error => {
        console.error('Erreur:', error);
        setChargement(false);
      });
  }, []);

  // Ajouter une tâche (POST)
  const ajouterTache = async (e) => {
    e.preventDefault();
    if (nouvelleTache.trim() === '') return;

    try {
      const response = await fetch('http://localhost:1337/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: nouvelleTache,
          completed: false
        })
      });

      if (response.ok) {
        const tacheCreee = await response.json();
        setTaches([...taches, tacheCreee]);
        setNouvelleTache('');
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout:', error);
    }
  };

  // 🆕 Toggle tâche (PUT)
  const toggleTache = async (id, completed) => {
    try {
      const response = await fetch(`http://localhost:1337/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !completed })
      });

      if (response.ok) {
        setTaches(taches.map(t => 
          t.id === id ? { ...t, completed: !completed } : t
        ));
      }
    } catch (error) {
      console.error('Erreur toggle:', error);
    }
  };

  // 🆕 Supprimer tâche (DELETE)
  const supprimerTache = async (id) => {
    try {
      const response = await fetch(`http://localhost:1337/todos/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setTaches(taches.filter(t => t.id !== id));
      }
    } catch (error) {
      console.error('Erreur suppression:', error);
    }
  };

  if (chargement) {
    return <div className="loading">Chargement...</div>;
  }

  const tachesCompletes = taches.filter(t => t.completed).length;

  return (
    <div className="todo-container">
      <h1>📝 Ma Todo List</h1>
      
      <form className="todo-form" onSubmit={ajouterTache}>
        <input
          type="text"
          className="todo-input"
          placeholder="Ajouter une tâche..."
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
        />
        <button type="submit" className="btn-add">
          Ajouter
        </button>
      </form>

      <ul className="todo-list">
        {taches.map((tache) => (
          <li key={tache.id} className="todo-item">
            <input
              type="checkbox"
              className="todo-checkbox"
              checked={tache.completed}
              onChange={() => toggleTache(tache.id, tache.completed)}
            />
            <span className={`todo-text ${tache.completed ? 'completed' : ''}`}>
              {tache.title}
            </span>
            <button 
              className="btn-delete"
              onClick={() => supprimerTache(tache.id)}
            >
              ✖️ Supprimer
            </button>
          </li>
        ))}
      </ul>

      <div className="stats">
        {tachesCompletes} / {taches.length} tâches complétées
      </div>
    </div>
  );
}

export default App;
