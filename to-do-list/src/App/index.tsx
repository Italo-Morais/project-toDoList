import styles from "./App.module.css";
import { Header } from "../components/Header";
import { Tasks } from "../components/Tasks";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface ITasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  function isCompletedTask(taskID: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskID) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function addTasks(titleTasks: string) {
    if (titleTasks) {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          title: titleTasks,
          isCompleted: false,
        },
      ]);
    } else alert("Digite uma nova tarefa");
  }

  function deleteTasks(taskID: string) {
    const newTasks = tasks.filter((task) => task.id !== taskID);
    const isCertainty = confirm("Confirmar exclusão ?");

    if (isCertainty) {
      setTasks(newTasks);
    } else {
      return tasks;
    }
  }

  return (
    <>
      <header>
        <Header onAddTask={addTasks} />
          </header>
        <main>
          <Tasks
            tasks={tasks}
            onDelete={deleteTasks}
            onCompleted={isCompletedTask}
          />
        </main>
    </>
  );
}
