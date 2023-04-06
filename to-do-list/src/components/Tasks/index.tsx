import { ITasks } from "../../App";
import { Task } from "../Task";
import styles from "./Tasks.module.css";

interface TasksProp {
  tasks: ITasks[];
  onDelete: (taskID: string) => void;
  onCompleted: (taskID: string) => void;
}

export function Tasks({tasks, onDelete, onCompleted}: TasksProp) {
  const tasksCompleted = tasks.filter(task => task.isCompleted)
  return (
    <div className={styles.containerTasks}>
      <div className={styles.taskStatus}>
        <div className={styles.tasksCreated}>
          <span>Tarefas criadas</span>
          <div className={styles.amountTasks}>
            {tasks.length}
          </div>
        </div>

        <div className={styles.tasksCompleted}>
            <span>Tarefas concluídas</span>
            <div className={styles.amountTasksCompleted}>
                {tasksCompleted.length} de {tasks.length}
            </div>
        </div>
      </div>
      
      <div className={styles.tasks}>
          {tasks.map(task => <Task task={task} onDelete={onDelete} onCompleted={onCompleted}/>)}
      </div>
    </div>
  );
}
