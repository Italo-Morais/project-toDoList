import styles from "./Header.module.css";
import logo from '../../assets/todo-logo.svg'
import plus from '../../assets/plus.svg'

export function Header() {
  return (
    <>
      <div className={styles.app}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.newTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button><span>Criar</span><img src={plus} alt="" /></button>
      </div>
    </>
  );
}
