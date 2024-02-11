import { styled } from "styled-components";
import { Button } from "./Button";
export const ButtonIcon = styled(Button)`
  margin-top: 0.9rem;
  display: flex;
  align-items: center;
  z-index: 9999;

  & img {
    width: 20px;
    height: 20px;
  }
  cursor: pointer;
  &:hover {
    background-color: rgb(var(--color-primary-50));
    color: rgb(var(--color-primary-100));
    transition-duration: 500ms;
  }
`;
