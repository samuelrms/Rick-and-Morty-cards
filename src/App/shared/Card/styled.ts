import styled from "styled-components";
import { theme } from "../../styles/theme";
import { device } from "../Components";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  background: ${theme.colors.purple};
  margin: 4rem;
  padding: 2rem;
  border-radius: 10px;
  border: 5px solid ${theme.colors.darkpurple};
  border-top: 0;
  border-left: 0;
  color: ${theme.colors.white};

  @media ${device.tablet} {
    display: none;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentHeaderCard = styled.div`
  background: ${theme.colors.blue};
  border-radius: 10px;
  text-align: center;
  padding: 5px;
  width: 300px;
`;

export const ContentFooterCard = styled(ContentHeaderCard)`
  background: ${theme.colors.gold};
`;
