import styled from 'styled-components'

 const ButtonNewTask = styled.button 
 `
    background-color: var(--accent);
    border: none;
    border-radius: var(--radius-sm);
    height: 45px;
    width: fit-content;
    padding: 0px 1.5rem;
    color: var(--background);
    font-size: var(--text-md);
    display: flex;
    align-items: center;
    gap: 10px;
    transition: background-color .2s ease;
    &:hover{
      background-color: var(--accent-h);
    }
    `
 export default ButtonNewTask