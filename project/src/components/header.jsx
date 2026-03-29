import styles from './header.module.css'
import Button from './buttonNewTask'
import Modal from './modal'
import Overlay from './overlayB'

import { useState, useEffect } from 'react'
function Header() {
    const [show, setShow] = useState(false)
    const [ overlay, setOverlay ] = useState(false);

    useEffect(()=>{
        if (show) {
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = "scroll"
        }
    }, [show])


    return (
        <div className={styles.header}>
            <div className={styles.titleArea}>
                <h2>Minhas Tarefas</h2>
                <p>Gerencie seu tempo e atividades</p>
            </div>

            <Button  openModal={()=> setShow(true)} activeOverlay={() => setOverlay(true)}></Button>

            {show && <Modal type="Nova Tarefa" closeModal={()=> setShow(false)} desactiveOverlay={()=> setOverlay(false)}/>}
            {overlay && <Overlay desactiveOverlay={()=> setOverlay(false)} closeModal={()=> setShow(false)}></Overlay>}



        </div>
    )
}
export default Header