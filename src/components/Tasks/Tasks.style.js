import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import PsychologyIcon from "@mui/icons-material/Psychology";

export const ShoppingCartIconStyle = styled(ShoppingCartIcon)`
  width: 48px;
  margin-right: 5px;
  border-radius: ${(p) => p.theme.radii.round};
  background: ${(p) => p.theme.colors.text};
  color: ${(p) => p.theme.colors.white};
`;
export const EmojiObjectsIconStyle = styled(EmojiObjectsIcon)`
  width: 48px;
  margin-right: 5px;
  border-radius: ${(p) => p.theme.radii.round};
  background: ${(p) => p.theme.colors.text};
  color: ${(p) => p.theme.colors.white};
`;
export const FormatQuoteIconStyle = styled(FormatQuoteIcon)`
  width: 48px;
  margin-right: 5px;
  border-radius: ${(p) => p.theme.radii.round};
  background: ${(p) => p.theme.colors.text};
  color: ${(p) => p.theme.colors.white};
`;
export const PsychologyIconStyle = styled(PsychologyIcon)`
  width: 48px;
  margin-right: 5px;
  border-radius: ${(p) => p.theme.radii.round};
  background: ${(p) => p.theme.colors.text};
  color: ${(p) => p.theme.colors.white};
`;
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
  color: ${(p) => p.theme.colors.black};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const Header = styled.p`
  margin: 0;
  padding: 10px;
  color: ${(p) => p.theme.colors.white};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const ContainerItem = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr) 45px 45px 45px;
  margin-bottom: 10px;
  background: grey;
  color: ${(p) => p.theme.colors.white};
  
`;
export const ContainerTasks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 10px;
  color: ${(p) => p.theme.colors.white};
  background: grey;
  
`;
