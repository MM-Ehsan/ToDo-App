
import React from "react";

const TodoItem = ({ text, onDelete }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
      />
      <span>{text}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
