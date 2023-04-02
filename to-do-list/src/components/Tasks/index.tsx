import { ITasks } from "../../App";
import { Task } from "../Task";
import styles from "./Tasks.module.css";

interface TasksProp {
  tasks: ITasks[]
}

export function Tasks({tasks}: TasksProp) {
  return (
    <div className={styles.containerTasks}>
      <div className={styles.taskStatus}>
        <div className={styles.tasksCreated}>
          <span>Tarefas criadas</span>
          <div className={styles.amountTasks}>
            5
          </div>
        </div>

        <div className={styles.tasksCompleted}>
            <span>Tarefas concluídas</span>
            <div className={styles.amountTasksCompleted}>
                2 de 5
            </div>
        </div>
      </div>
      
      <div className={styles.tasks}>
          {tasks.map(task => <Task/>)}
      </div>
    </div>
  );
}
