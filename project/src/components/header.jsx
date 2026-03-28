import styles from './header.module.css'
import Button from './buttonNewTask'
import Modal from './modalAddTask'
import { useState } from 'react'

function Header() {
    const [show, setShow] = useState(false)

    return (
        <div className={styles.header}>
            <div className={styles.titleArea}>
                <h2>Minhas Tarefas</h2>
                <p>Gerencie seu tempo e atividades</p>
            </div>

            <Button openModal={()=> setShow(true)}></Button>
            {show && <Modal></Modal>}

        </div>
    )
}
export default Header