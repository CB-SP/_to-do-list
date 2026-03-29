import styled from "styled-components";

const ButtonStyled = styled.button`
    height: 40px;
    with: 130px;
    padding: 1rem;
    background-color: ${({$type}) => $type === "submit" ? "var(--accent)" : "var(--background)"};
    color: ${({$type}) => $type === "button" ? "var(--text)" : "var(--background)"} ;
    border: 1px solid ${({$type}) => $type === "button" ? "var(--border)" : "transparent"};
    border-radius: var(--radius-sm);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
    background-color: ${({$type}) => $type === "button" ? "var(--borderIn)" : "var(--accent-h)"};
    }
    transition: all .1s ease-in-out;
`


export default function Button({type, text}) {
    return <ButtonStyled $type={type}>
            {text}
          </ButtonStyled>
}