import './App.css';

function App() {
  // Données "en dur" pour construire l'interface
  const tasks = [
    { id: 1, title: 'Apprendre React', isCompleted: true },
    { id: 2, title: 'Boire un café', isCompleted: false },
  ];

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
