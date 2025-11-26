import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';

const API_URL = 'http://localhost:1337/todo';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTodo, setNewTodo] = useState('');

  // Charger les todos au démarrage
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      Alert.alert(
        'Erreur',
        'Impossible de charger les tâches. Vérifiez que le backend est lancé.'
      );
      console.error('Erreur de chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async () => {
    if (!newTodo.trim()) {
      Alert.alert('Attention', 'Veuillez entrer une tâche');
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newTodo,
          done: false,
        }),
      });

      const createdTodo = await response.json();
      setTodos([...todos, createdTodo]);
      setNewTodo('');
    } catch (error) {
      Alert.alert('Erreur', "Impossible d'ajouter la tâche");
      console.error("Erreur d'ajout:", error);
    }
  };

  const toggleTodo = async (todo) => {
    try {
      const response = await fetch(`${API_URL}/${todo.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          done: !todo.done,
        }),
      });

      const updatedTodo = await response.json();
      setTodos(todos.map((t) => (t.id === todo.id ? updatedTodo : t)));
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de modifier la tâche');
      console.error('Erreur de mise à jour:', error);
    }
  };

  const renderTodo = ({ item }) => (
    <TouchableOpacity
      style={styles.todoItem}
      onPress={() => toggleTodo(item)}
      activeOpacity={0.7}
    >
      <View style={styles.todoContent}>
        <View style={[styles.checkbox, item.done && styles.checkboxDone]}>
          {item.done && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={[styles.todoText, item.done && styles.todoDone]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text style={styles.loadingText}>Chargement...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <Text style={styles.title}>📝 Ma Todo App</Text>
        <Text style={styles.subtitle}>Nuit de l'Info 2025 - ISITCOM</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nouvelle tâche..."
          value={newTodo}
          onChangeText={setNewTodo}
          onSubmitEditing={addTodo}
        />
        <Button title="Ajouter" onPress={addTodo} color="#3b82f6" />
      </View>

      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Aucune tâche pour le moment</Text>
        }
      />

      <Text style={styles.footer}>
        {todos.filter((t) => !t.done).length} tâche(s) restante(s)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: 50,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },
  loadingText: {
    marginTop: 10,
    color: '#6b7280',
    fontSize: 16,
  },
  header: {
    backgroundColor: '#3b82f6',
    padding: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#dbeafe',
    textAlign: 'center',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  list: {
    flex: 1,
  },
  listContent: {
    padding: 20,
    paddingTop: 0,
  },
  todoItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  todoContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3b82f6',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxDone: {
    backgroundColor: '#3b82f6',
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoText: {
    fontSize: 16,
    color: '#1f2937',
    flex: 1,
  },
  todoDone: {
    textDecorationLine: 'line-through',
    color: '#9ca3af',
  },
  emptyText: {
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: 16,
    marginTop: 40,
  },
  footer: {
    textAlign: 'center',
    padding: 20,
    color: '#6b7280',
    fontSize: 14,
  },
});
