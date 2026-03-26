import styled from "styled-components";

const StyledCard = styled.div
    `
    height: 400px;
    color: ${({ $category }) => {
        if ($category === "created") {
            return "var(--created-t)"
        } else if ($category === "pendent") {
            return "var(--pendent-t)"
        } else {
            return "var(--canceled-t)"
        }
    }
    };
    background-color: var(--background);
    border: 1px solid ${({ $category }) => {
        if ($category === "created") {
            return "var(--created-t)"
        } else if ($category === "pendent") {
            return "var(--pendent-t)"
        } else {
            return "var(--canceled-t)"
        }
    }};
    border-radius: var(--radius-md);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .headerCard{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20%;
        margin-top: -25px;
    }
        
    .mainCard{
        border: 2px dashed var(--borderIn);
        border-radius: var(--radius-md);
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .mainCard h4{
        font-weight: var(--weight-bd)
    }
`;



function Card({ title, desc, category }) {
    return (
        <StyledCard $category={category}>
            <div className="headerCard">
                <h3>{title}</h3>
                <p className="countTotal">0</p>
            </div>
            <div className="mainCard">
                <h4>{desc}</h4>
                <p>As tarefas aparecerão aqui</p>
            </div>
        </StyledCard>
    )
}
export default Card