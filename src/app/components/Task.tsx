// app/components/Task.tsx
"use client";

import React from 'react';
import styles from '../styles/Task.module.css';

interface TaskProps {
  id: number;
  text: string;
  completed: boolean;
  dueDate?: string;
  reminder?: string;
  tags?: string[];  // Add tags here
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ id, text, completed, dueDate, reminder, tags, onToggleComplete, onDelete })=> {
const tagsDisplay = tags?.join('; '); 
  return (
    <div className={`${styles.task} ${completed ? styles.completed : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id)}
      />
      <div className={styles.taskContent}>
        <span>{text}</span>
        {dueDate && <div className={styles.dueDate}>Due: {dueDate}</div>}
        {reminder && <div className={styles.reminder}>Note: {reminder}</div>}
        {(
          <div className={styles.tags}>
             Tags: {tagsDisplay}
          </div>
        )}
      </div>
      <button onClick={() => onDelete(id)} className={styles.deleteButton}>
        Delete
      </button>
    </div>
  );
};

export default Task;
