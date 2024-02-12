import { styled } from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  margin: 0px auto;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;

  background: linear-gradient(
    78deg,
    rgba(31, 77, 32, 1) 0%,
    rgba(26, 30, 28, 1) 100%
  );

  & .svg {
    position: absolute;
    background-position: fixed;
    background-size: cover;
    overflow: hidden;
    width: 100%;
    top: 3.9rem;
  }

  @media (min-width: 768px) {
    max-width: 1024px;
  }
`;
