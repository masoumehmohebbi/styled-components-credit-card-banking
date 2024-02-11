import { styled } from "styled-components";
export const Button = styled.button`
  background-color: transparent;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 64px;
  border: 1px solid rgb(var(--color-primary-50));
  color: rgb(var(--color-primary-50));

  cursor: pointer;
  &:hover {
    background-color: rgb(var(--color-primary-50));
    color: rgb(var(--color-primary-100));
    transition-duration: 500ms;
  }
`;
