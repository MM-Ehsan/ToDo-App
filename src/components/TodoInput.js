import React, { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = () => {
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TodoInput;
