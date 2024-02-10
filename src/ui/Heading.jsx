import { styled, css } from "styled-components";
export const Heading = styled.h1`
  color: rgb(var(--color-secondary-0));
  padding-bottom: 0.9rem;
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 56px;
      font-weight: bold;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 23px;
      font-weight: bold;
      @media (min-width: 768px) {
        font-size: 48px;
        font-weight: bold;
      }
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 15px;
      font-weight: bold;
      @media (min-width: 768px) {
        font-size: 40px;
        font-weight: bold;
      }
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 22px;
      font-weight: bold;
      padding: 36px 0px;
      @media (min-width: 768px) {
        font-size: 32px;
        font-weight: bold;
      }
    `}
    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 16px;
      font-weight: bold;
      padding-bottom: 7px;
      @media (min-width: 768px) {
        font-size: 24px;
        font-weight: bold;
      }
    `}
    
    ${(props) =>
    props.as === "h6" &&
    css`
      font-size: 16px;
      font-weight: bold;
    `}
`;
