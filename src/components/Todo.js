import React from 'react'

const Todo = ({todo, toggleTodo}) => {

  const handleToggle = () => {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
      <input type="checkbox" checked={todo.comp} readOnly onChange={handleToggle} />
      {todo.name}
      </label>
    </div>
  );
};

export default Todo