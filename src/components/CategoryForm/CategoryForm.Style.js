import styled from "styled-components";

export const Container = styled.div`
position: absolute;
top: 35%;
left: 25%;
display: flex;
flex-direction: column;
width: auto;
padding: 50px;
border: 1px solid ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.background};
`;
export const BtnDelete = styled.div`
display: flex;
justify-content: space-around;
gap: 20px;
width: 100%;
margin-top: 20px;
`;