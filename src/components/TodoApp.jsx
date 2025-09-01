import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { ToastContainer } from "react-toastify";
import useTodos from "../hooks/useTodos";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const TodoApp = () => {
  const { todos, handleAddTodo, handleDelete } = useTodos();

  return (
    <>
    <div className="todo-container">
      <h1>Todo App</h1>

      <TodoInput onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDelete} />
      </div>
      <ToastContainer />
      </>
  );
};

export default TodoApp;
