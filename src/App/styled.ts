import styled from "styled-components";
import { device } from "./shared";
import { theme } from "./styles/theme";

export const Container = styled.section`
  margin: auto 0;
`;

export const DeviceMobile = styled.div`
  display: none;
  color: ${theme.colors.white};
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 30px;
  @media ${device.tablet} {
    display: flex;
  }
  h1 {
    background: ${theme.colors.purple};
    padding: 30px;
    border-radius: 10px;
  }
`;
