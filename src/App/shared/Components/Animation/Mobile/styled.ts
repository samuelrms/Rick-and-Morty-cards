import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import { device } from "../../size";

export const DeviceMobile = styled.div`
  display: none;
  color: ${theme.colors.white};
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 30px;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  h1 {
    background: ${theme.colors.purple};
    padding: 30px;
    border-radius: 10px;
  }
`;
