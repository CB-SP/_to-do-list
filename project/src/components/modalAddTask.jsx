import styled from 'styled-components'
import Input from './input'

const ModalStyled = styled.div
 `
    height: 300px;
    width: 200px;
    background-color: var(--muted);
    border-radius:  var(--radius-md);
    padding: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
` 

export default function Modal(){
    return(
        <ModalStyled>
            <div className="titleModal">
                <h3>Nova Tarefa</h3>
            </div>
            <form action="">
                <Input text="gtfyj"></Input>
            </form>
           
        </ModalStyled>
    )
}
