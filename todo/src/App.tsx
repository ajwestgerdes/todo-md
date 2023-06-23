import './App.css';
import { useState } from 'react';

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = event.target.todo.value;
    setTodos([...todos, { id: Date.now(), name: newTodo, completed: false }]);
    event.target.todo.value = '';
  };

  const handleCheckTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed =!updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" placeholder="Add new todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {todo.name}
            <input type="checkbox" onChange={() => handleCheckTodo(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
