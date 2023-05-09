import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo 1", completed: false },
    { id: 2, text: "Todo 2", completed: false },
    { id: 3, text: "Todo 3", completed: false }
  ]);

  const itemsLeft = todos.filter(todo => !todo.completed).length;


  const showAll = () => {
    setTodos([
      ...todos
    ]);
  };


  const showActive = () => {
    const activeItems = todos.filter(todo => !todo.completed);
    setTodos(activeItems);
  };
  
  const showCompleted = () => {
    const completedItems = todos.filter(todo => todo.completed);
    setTodos(completedItems);
  };
  

  const handleToggle = (id) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  const toggleAll = () => {
    const allCompleted = todos.every(todo => todo.completed);
  
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        return { ...todo, completed: !allCompleted };
      });
    });
  };

  const deleteTodos = (id) => {
  setTodos(prevTodos => {
    return prevTodos.filter(todo => todo.id !== id);
  });
};

  

  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let inputValue = document.querySelector('.enter-input').value;
    if (inputValue !== '') {
      setTodos(prevTodos => [
        ...prevTodos,
        { id: Date.now(), text: inputValue, completed: false }
      ]);
      inputValue = '';
    }
  };

  return (
    <div className="App">
      <h1 className='main-title'>Todos</h1>

      <div className='todo-header'>
        <button className='toggleAll' onClick={toggleAll}>Toggle All</button>
        <form onSubmit={handleFormSubmit}>
          <input className='enter-input' type="text" placeholder="What needs to be done?" />
        </form>
      </div>

      <section className='todo-section'>
        <ul className='todo-list'>
          {todos.map((todo) => (
            <li key={todo.id} className='todo-item'>
              <input
                className='toggle'
                type='checkbox'
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <span
                className='todo-text'
                style={{ textDecoration: todo.completed ? 'line-through' : '' }}
              >
                {todo.text}
              </span>
              <button className='delete' onClick={() => deleteTodos(todo.id)}>
  Delete
</button>

            </li>
          ))}
        </ul>
      </section>

      <footer>
        <p>Items left : {itemsLeft}</p>
        <div>
          <button className='hb' onClick={showAll}>All</button>
          <button className='hb' onClick={showActive}>Active</button>
          <button className='hb' onClick={showCompleted}>Completed</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
