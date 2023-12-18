// App.js

import './App.css'
import React, { useState } from 'react';

function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  const AddTodo = () => {
    if (inputValue === "") {
      setError('Please add a list');
    } else {
      setTodos([...todos, inputValue]);
      setError('');
      setInputValue('');
    }
  };

  const DeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const UpdateTodo = (index) => {
    const updatedText = prompt("Enter updated text:", todos[index]);
    if (updatedText !== null) {
      const updatedTodos = [...todos];
      updatedTodos[index] = updatedText;
      setTodos(updatedTodos);
    }
  };

  return (
    <div className='container'>
      <input
        type="text"
        id="inputlist"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={AddTodo}>ADD LIST</button>
      <p className='error'>{error}</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
             <input
              type="checkbox"
            />
            {todo}
            <button onClick={() => UpdateTodo(index)}>Update</button>
            <button onClick={() => DeleteTodo(index)}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

