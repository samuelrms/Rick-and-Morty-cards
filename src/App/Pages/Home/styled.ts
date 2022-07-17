import styled from "styled-components";
import { device } from "../../shared";
import { theme } from "../../styles/theme";

export const ContainerHome = styled.div`
  height: 100vh;

  @media ${device.tablet} {
    display: none;
  }
`;

export const ContentTextHome = styled.div`
  background: ${theme.colors.purple};
  text-align: center;
  color: ${theme.colors.white};
  margin: 20px 50px 0;
  border-radius: 10px;
  padding: 5px 10px 15px;

  button {
    border-radius: 10px;
    border: none;
    padding: 15px;
    width: 50%;
    cursor: pointer;
    background: ${theme.colors.blue};
    color: ${theme.colors.white};
    font-size: 1.5rem;
    font-weight: bold;
    :hover {
      background: ${theme.colors.gold};
    }
  }
`;
