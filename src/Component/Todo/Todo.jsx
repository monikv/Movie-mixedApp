import React, { useState } from 'react';
import Nav from '../Nav';

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleClick = (e) => {
    const value = e.target.value;
    setTask(value);
  };

  const handleAddClick = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks

    if (isEditing) {
      // Update the task if editing
      setTodo((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, task: task } : item
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      // Add a new task
      setTodo((prev) => [...prev, { id: Math.random(), task: task }]);
    }
    setTask(""); // Clear the input field
  };

  const handleDelete = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id)); // Remove the task with the given id
  };

  const handleEdit = (id) => {
    const taskToEdit = todo.find((item) => item.id === id);
    setTask(taskToEdit.task); // Set the task in the input field
    setIsEditing(true);
    setEditId(id);
  };

  return (
    <>
      <Nav />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <h1>Welcome to Todo APP</h1>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={handleClick}
          style={{ marginBottom: "10px", padding: "5px", width: "300px" }}
        />
        <button onClick={handleAddClick} style={{ marginBottom: "20px", padding: "10px 20px" }}>
          {isEditing ? "Update" : "Add"}
        </button>
        <div style={{ width: "100%", maxWidth: "500px" }}>
          {todo.map((item) => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
              <h2 style={{ margin: 0 }}>{item.task}</h2>
              <div>
                <button onClick={() => handleEdit(item.id)} style={{ marginRight: "10px" }}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;