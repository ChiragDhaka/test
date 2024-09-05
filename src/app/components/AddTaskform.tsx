"use client";

import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const AddTaskForm = () => {
  const { addTask } = useTasks();
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
      priority: priority as "high" | "middle" | "low",
      dueDate,
      tags,
    };
    addTask(newTask);
    setDescription("");
    setTags([]);
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="middle">Middle</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTaskForm;
