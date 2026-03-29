import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import Label from './labelB'
import Input from './input'
import Select from './select'
import Textarea from './textarea'
import Button from './button'

const ModalStyled = styled.div`
    
    height: fit-content;
    background-color: var(--background);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: var(--radius-md);
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 1;

    .closeIcon{
        font-size: 1.6rem;
        border-radius: var(--radius-full);
        padding: 2px;
        transition: all .2s ease-in-out;
        font-weight: var(--weight-nl);
        &:hover{
            background-color: var(--muted);
        }
            color: #474747;
        }
        .headerModal{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid var(--muted);
        padding: 1rem 1.5rem;
        }
        .headerModal h3{
            font-weight: var(--weight-bd);
        }

        @media screen and (max-width: 768px){
            height: 450px;    

            .form{
            width: 270px;
            padding: 0 1.5rem 1.5rem 1.5rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
            magin-top: 100px;
            overflow-y: auto;

        }   
             
        .form .inputBox{
                display: flex;
                flex-direction: column;
                gap: 6px;
                width: 100%;
        }
        .div{
                display: flex;
                flex-direction: column;
                gap: 20px;
                width: 100%;
        }
        .div .inputBox{
                
                widh: 50%;
        }
        .btns{
            display: flex;
            flex-direction: column;
            gap: 10px;
            justify-content: flex-end;
        }
        }

        
        @media screen and (min-width: 769px){

            .form{
            width: 400px;
            padding: 0 1.5rem 1.5rem 1.5rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
        }
                 
        .form .inputBox{
                display: flex;
                flex-direction: column;
                gap: 6px;
                width: 100%;
        }
        .div{
                display: flex;
                gap: 20px;
                width: 100%;
        }
        .div .inputBox{
                
                width: 50%;
        }
        .btns{
            display: flex;
            gap: 20px;
            justify-content: flex-end;
        }
        }

   
       
`


export default function Modal({ type, closeModal, desactiveOverlay }) {
    return (
        <ModalStyled>
            <div className="headerModal">
                <h3>{type}</h3>
                <IoClose className="closeIcon" onClick={() => { closeModal(), desactiveOverlay() }}></IoClose>
            </div>
            <form action="" className="form">
                <div className="inputBox">
                    <Label label="Descrição" id="taskDesc"></Label>
                    <Textarea type="text" placeholder="Descreva a tarefa" id="taskDesc" />
                </div>
                <div className="div">
                    <div className="inputBox">
                        <Label label="Categoria" id="taskCategory"></Label>
                        <Select id="taskCategory" />
                    </div>
                    <div className="inputBox">
                        <Label label="Data" id="dateTask"></Label>
                        <Input type="date" id="dateTask" />
                    </div>
                </div>
                <div className="div">
                    <div className="inputBox">
                        <Label label="Hora de Início" id="taskStartTime"></Label>
                        <Input type="time" id="taskStartTime" />
                    </div>
                    <div className="inputBox">
                        <Label label="Hora de Término" id="taskEndTime"></Label>
                        <Input type="time" id="taskEndTime" />
                    </div>
                </div>
                <div className="btns">
                    <Button type="button" text="Cancelar" />
                    <Button type="submit" text="Gravar Alterações" />
                </div>

            </form>


        </ModalStyled>
    )
}