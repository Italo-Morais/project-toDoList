import styles from "./Task.module.css";
import trash from "../../assets/trash.svg";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ITasks } from "../../App";

interface TaskProps {
  task: ITasks;
  onDelete: (taskID: string) => void;
}

export function Task({task, onDelete}: TaskProps) {
  return (

    <div className={styles.container}>

      <button 
      className={styles.checkContainer}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div className={styles.check} /> }
      </button>

      <div className={styles.taskTitle}>
        <p>{task.title}</p>
      </div>

      <button 
      onClick={() => onDelete(task.id)}
      className={styles.deleteButton}>
        <img src={trash} alt="icon" width={24} />
      </button>
    </div>
  );
}
