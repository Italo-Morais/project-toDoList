import styles from './App.module.css'
import logo from './assets/todo-logo.svg'
import buttonIcon from './assets/buttonicon.svg';

export function App() {

  return (
      <>
        <div className={styles.app}>
          <header>
            <img src={logo} alt="logo" />
          </header>
        </div>
        <div className={styles.newTask}>
        <input  type="text" placeholder='Adicione uma nova tarefa' />
        <button>Criar</button>
        </div>
      </>
  )
}


