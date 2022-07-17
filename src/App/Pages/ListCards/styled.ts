import styled from "styled-components";
import { device } from "../../shared";
import { theme } from "../../styles/theme";

export const ContainerCard = styled.div`
  position: relative;
`;

export const BackToHome = styled.div`
  position: fixed;
  top: 30px;
  left: 15px;

  button {
    border: none;
    background: ${theme.colors.purple};
    padding: 5px 10px;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 10px;
    color: ${theme.colors.white};
    font-weight: bold;
  }

  @media ${device.tablet} {
    display: none;
  }
`;
