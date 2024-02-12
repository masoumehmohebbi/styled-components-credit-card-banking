import { styled } from "styled-components";
import { Button } from "./Button";
export const ButtonIcon = styled(Button)`
  margin: 0.9rem 0rem;
  display: flex;
  align-items: center;
  position: absolute;

  & img {
    width: 20px;
    height: 20px;
  }
`;
