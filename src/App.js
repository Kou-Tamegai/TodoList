import { useState, useRef } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todos, setTodos] = useState([]);

  const todoref = useRef();

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.comp = !todo.comp;
    setTodos(newTodos);
  }

  const AddTodo = () => {
    const name = todoref.current
    .value;
    if (name === "") return
    setTodos((prevtodos) => {
      return [...prevtodos, {id: uuidv4(), name: name, comp: false}];
    });
    todoref.current.value = null;
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.comp);
    setTodos(newTodos);
  }
  
  return (
    <div id='Tododeco'>
    <div id='title'>My TodoList</div>

    <div id='TodoList'>
     <TodoList todos={todos} toggleTodo={toggleTodo} />
     </div>

     <input id='input' ref={todoref}></input>

     <div id='buttons'>
     <button id='AddTask' onClick={AddTodo}>タスクを追加</button>
     <button id='DeleteTask' onClick={handleClear} >完了したタスクを削除</button>
     </div>

     
     <div id='remainTask'>残りのタスク:{todos.filter((todo) => !todo.comp).length}</div>
    </div>
  );
}

export default App;