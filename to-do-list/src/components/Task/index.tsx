import styles from './Task.module.css'
import trash from '../../assets/trash.svg'
import { BsFillCheckCircleFill } from "react-icons/bs";

export function Task() {
    return(
        <div className={styles.container}>
            <button className={styles.checkContainer}>
                {/* <div /> */}
                 <BsFillCheckCircleFill /> 
            </button>

            <div className={styles.taskTitle}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vitae autem veniam cum repellat modi id corporis, fugiat facere, quibusdam facilis. At quasi suscipit assumenda unde molestias vero iusto voluptasasasasoakjsokaskoaoskkaosskoakososkasokaoksokasoksaoksaoskaoa Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eveniet saepe dolores natus libero ullam minima explicabo est quos hic corrupti repellendus nemo dolore voluptas incidunt, error nam nobis numquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab beatae pariatur autem, sequi iste dolores asperiores possimus eveniet. Quisquam deserunt optio voluptatem ducimus? Perspiciatis ipsam rerum eos sint, quos vitae?
                </p>
            </div>

            <button className={styles.deleteButton}>
                <img src={trash} alt="icon" width={24} />
            </button>
        </div>
    )
}