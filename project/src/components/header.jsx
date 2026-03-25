import styles from './header.module.css'
import ButtonNewTask from './buttonNewTask'
import { IoMdAdd } from 'react-icons/io'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.titleArea}>
                <h2>Minhas Tarefas</h2>
                <p>Gerencie seu tempo e atividades</p>
            </div>

            <ButtonNewTask className={styles.btn}>
                <IoMdAdd></IoMdAdd>
                <p>Nova Tarefa</p>
            </ButtonNewTask>
        </div>
    )
}
export default Header