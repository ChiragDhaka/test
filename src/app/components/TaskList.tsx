"use client";

import React from "react";
import { useTasks } from "../context/TaskContext";
import styles from "../styles/Task.module.css";

const TaskList = () => {
  const { tasks, deleteTask, completeTask } = useTasks();

  return (
    <div className={styles["task-list-container"]}>
      <h1 className={styles["task-list-header"]}>Task List</h1>
      <table className={styles["task-table"]}>
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.description}</td>
              <td>
                <span className={`${styles["priority-badge"]} ${styles[task.priority]}`}>
                  {task.priority} priority
                </span>
              </td>
              <td>
                <button onClick={() => completeTask(task.id)} className={styles["action-button"]}>
                  ✔
                </button>
                <button onClick={() => deleteTask(task.id)} className={styles["action-button"]}>
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
