import styled from "styled-components";


const  TextareaStyled  =  styled.textarea`
    height: 60px;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    outline: 2px solid transparent;
    padding: 10px;
    &:focus{
    outline: 2px solid var(--accent);
    }
    transition: all .2s ease-in-out;
    resize: none;
    font-family: inherit;
`

export default function Textarea({type, placeholder, id}){
    return(
        <TextareaStyled type={type} placeholder={placeholder} id={id}/>
    )
}
