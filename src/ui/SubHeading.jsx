import { styled, css } from "styled-components";
export const SubHeading = styled.h1`
  color: rgb(var(--color-secondary-0));
  ${(props) =>
    props.as === "md" &&
    css`
      font-size: 18px;
      font-weight: normal;
    `}
  ${(props) =>
    props.as === "sm" &&
    css`
      color: ${(props) =>
        props.varient === "primary"
          ? "rgb(var(--color-primary-50))"
          : "rgb(var(--color-secondary-0))"};
      font-size: 16px;
      font-weight: normal;
    `}
`;
