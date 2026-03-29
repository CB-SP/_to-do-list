import styled from "styled-components";

const LabelStyled = styled.label`
    font-weight: var(--weight-bd);
    font-size: var(--text-sm); 
`
export default function Label({ id, label }) {

    return <LabelStyled htmlFor={id}>{label}</LabelStyled>

}