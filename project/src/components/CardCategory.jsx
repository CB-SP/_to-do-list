import styled from "styled-components";

const styledCard = styled.div
    `
    width: 200px;
    height: 350px;
    backgroun: red;
    color: red;
    background-color: var(--muted);
    border: 1px solid ${({category}) => category==='created' ? 'var(--created-h)' : 'var(--pendent-h)'};

`

function Card({title, desc, category}) {
    return (
        <styledCard category={category}>
            <h2>{title}</h2>
            <p>{desc}</p>
        </styledCard>
    )
}
export default Card