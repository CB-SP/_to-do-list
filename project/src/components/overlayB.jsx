import styled from "styled-components";

const OverlayS = styled.div `
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, .4);
`

export default function Overlay({desactiveOverlay, closeModal}){
    return(
        <OverlayS onClick={()=> {desactiveOverlay(), closeModal()}}></OverlayS>
    )
}