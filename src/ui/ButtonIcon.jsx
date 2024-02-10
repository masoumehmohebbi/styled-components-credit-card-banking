import { styled } from "styled-components";
import { Button } from "./Button";
export const ButtonIcon = styled(Button)`
  margin-top: 0.9rem;
  display: flex;
  align-items: center;

  & img {
    width: 20px;
    height: 20px;
  }
`;
