import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          text={todo} 
          onDelete={() => onDelete(index)} 
        />
      ))}
    </ul>
  );
};

export default TodoList;
