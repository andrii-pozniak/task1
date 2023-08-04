import styled from "styled-components";

export const Container = styled.div`
max-width: 1170px;
margin-right: auto;
margin-left: auto;
padding: 20px;
`;
export const TabStyle = styled.table`
width: 100%;
`;
export const HeaderTab = styled.thead`
background: grey;
color: white;
border-right: 0;
border-left: 0;
`;
export const CellTab = styled.th`
padding: 10px;

`;
export const Button = styled.button`

border: none;
background: transparent;
margin: 0;
padding: 0 10px;

`;
export const Item = styled.p`
margin: 0;
padding: 10px;
;
`;
export const ContainerItem = styled.div`
display: grid;
  grid-template-columns: repeat(5, 1fr) 45px 45px 45px;
  margin-bottom: 20px;
  align-items: center;


`;