import { styled, css } from "styled-components";
export const Heading = styled.h1`
  color: rgb(var(--color-secondary-0));
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 56px;
      font-weight: bold;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 48px;
      font-weight: bold;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 40px;
      font-weight: bold;
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 32px;
      font-weight: bold;
    `}
    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 24px;
      font-weight: bold;
    `}
    
    ${(props) =>
    props.as === "h6" &&
    css`
      font-size: 16px;
      font-weight: bold;
    `}
`;
