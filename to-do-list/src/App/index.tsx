import styles from "./App.module.css";
import { Header } from "../components/Header";
import { Tasks } from "../components/Tasks";
import { useState } from "react";

export interface ITasks {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITasks[]>([{
    id: 1,
    title: 'task',
    isCompleted: false
  }])


  return (
    <>
    <header>
      <Header />
      <main>
        <Tasks tasks={tasks}/>
      </main>
    </header>
    </>
  );
}
