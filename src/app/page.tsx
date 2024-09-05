"use client";

import AddTaskForm from "./components/AddTaskform";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";

export default function Home() {
  return (
    <TaskProvider>
      <div>
        <AddTaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}
