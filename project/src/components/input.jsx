import styled from "styled-components";

const InputBoxStyled = styled.div
    ` 
    display:flex;
    flex-direction: column;
    gap: 10px;
`

const Label = styled.label `
    
`

const Input = styled.input `
   heigth: 40px;
   width: 100%;
   border: 1px solid var(--muted);
   outline: 1px solid transparent;
   &:focus{
   outline-color: var(--accent);
   }
`
export default function InputBox({id, placeholder, type, text}) {
    return (
        <InputBox>
            <Label>{text}</Label>
            <Input type={type} id={id} placeholder={placeholder}/>
        </InputBox>
    )
}