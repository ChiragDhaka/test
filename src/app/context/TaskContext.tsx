"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface Task {
  id: number;
  description: string;
  completed: boolean;
  priority: "high" | "middle" | "low";
  dueDate: string;
  tags: string[];
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within TaskProvider");
  return context;
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completeTask = (id: number) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: true } : task)));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, completeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
