import { useState } from "react";
import { toast } from "react-toastify";

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    toast.success("Task completed!", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return { todos, handleAddTodo, handleDelete };
};

export default useTodos;
