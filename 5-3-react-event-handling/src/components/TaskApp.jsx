import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskApp() {
  // Task 1: Create state for text input
  const [text, setText] = useState("");
  // Task 2: Create state for tasks array
  const [tasks, setTasks] = useState([]);
  
  const handleSubmit = () => {
    // Task 2: Add task if text is not empty
    if (text.trim()) {
      setTasks(prev => [...prev, { id: Date.now(), text }]);
      setText(""); // Clear input after adding
    }
  };

  
  const handleDelete = (id) => {
    // Task 3: Filter tasks by id to remove the clicked one
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  
  const handleClearAll = () => {
    // Task 4: Set tasks to empty array
    setTasks([]);
  };

  return (
    <section className="card">
      {/*Controlled Input */}
      <div className="inputRow">
        <input
          type="text"
          placeholder="Type a task..."
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <button className="btn btn--primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      
      {/* Task 1: Display current text value */}
      <p>{text}</p>

      {/*Render Task List and Enable Delete */}
      {/*Pass tasks and onDelete */}
      <TaskList tasks={tasks} onDelete={handleDelete} />

      {/*Clear All */}
      <div className="footerRow">
        <button className="btn btn--ghost" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
}
