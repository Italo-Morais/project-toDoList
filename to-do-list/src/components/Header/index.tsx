import styles from "./Header.module.css";
import logo from '../../assets/todo-logo.svg'
import plus from '../../assets/plus.svg'
import { useState, ChangeEvent, FormEvent } from 'react'

interface HeaderProps {
  onAddTask: (titleTasks: string) => void;
}

export function Header({onAddTask}: HeaderProps) {
  const [titleTasks, setTitleTasks] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(titleTasks)
    setTitleTasks('')
  }

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setTitleTasks(event.target.value)
    
  }

  return (
    <>
      <div className={styles.app}>
        <img src={logo} alt="logo" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.newTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={titleTasks}
            onChange={handleChangeInput}
          />
          <button><span>Criar</span><img src={plus} alt="" /></button>
        </div>
      </form>
    </>
  );
}
