import styled from "styled-components";


const  SelectStyled  =  styled.select`
    height: 40px;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    outline: 2px solid transparent;
    padding: 0 5px;
    &:focus{
    outline: 2px solid var(--accent);
    }
    transition: all .2s ease-in-out;
     color: #474747;
    font-family: inherit;
`

export default function Select({taskCategory}){
    return <SelectStyled id="taskCategory">
        <option value="">Criada</option>
        <option value="">Pendente</option>
        <option value="">Cancelada</option>
    </SelectStyled>
}