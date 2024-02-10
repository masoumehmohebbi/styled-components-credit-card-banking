import { createGlobalStyle } from "styled-components";
import { styled, css } from "styled-components";

const GlobaloStyle = createGlobalStyle`
    :root {
        &,
        &.light-mode {
        --background-app-rgb:61, 84, 77;
        --color-primary-900:28, 28, 28;
        --color-primary-800:26, 30, 28;
        /* --color-primary-100: 61, 84, 77; */
        --color-primary-100: 34,43,40;
        --color-primary-50: 128, 203, 134;

        --color-secondary-50: 173, 178, 177;
        --color-secondary-0: 255, 255, 255;
        }
        &.dark-mode {
        --color-secondary-900: 249, 250, 251;
        --color-secondary-800: 243, 244, 246;
        
        --color-secondary-700: 229, 231, 235;
        --color-secondary-600: 209, 213, 219;
        --color-secondary-500: 156, 163, 175;
        --color-secondary-400: 107, 114, 128;
        --color-secondary-300: 75, 85, 99;
        --color-secondary-200: 55, 65, 81;
        --color-secondary-100: 31, 41, 55;
        --color-secondary-50: 17, 24, 39;
        --color-secondary-0: 24, 33, 47;
        --backdrop-color: 0, 0, 0;
        }
    }
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: "Vazir";
    min-height: 100vh;
    user-select: none;
    background-color: rgb(var(--color-primary-900));

     /* style scrollbar  */
    overflow-y: scroll;
    scrollbar-color: rgb(var(--color-primary-50)) rgb(var(--color-primary-100));
    scrollbar-width: thin;
    }

    * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    outline: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    }

    li {
    list-style: none;
  }
  
    @font-face {
    font-family: "Vazir";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/Vazirmatn-Regular.woff2") format("woff2");
    }

    @font-face {
    font-family: "Vazir";
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/Vazirmatn-Bold.woff2") format("woff2");
    }

    @font-face {
    font-family: "Vazir";
    font-style: normal;
    font-weight: 900;
    src: url("/fonts//Vazirmatn-Black.woff2") format("woff2");
    }
`;

export default GlobaloStyle;

export const Container = styled.div`
  background-color: rgb(var(--color-primary-800));
  overflow: hidden;
  margin: auto;
  max-width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 0rem 1rem;
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
    background-repeat: repeat;
    top: 3.9rem;
  }

  @media (min-width: 768px) {
    max-width: 1024px;
    padding: 0rem 1rem 1rem 1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  flex-wrap: wrap;
  flex-direction: column;

  justify-content: ${(props) => props.varient === "primary" && "space-between"};
  gap: ${(props) => (props.varient === "primary" ? "25px" : "10px")};

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    display: ${(props) => props.varient === "secondary" && "none"};
    ${(props) =>
      props.varient === "s" &&
      css`
        display: flex;
        justify-content: space-between;
        width: 100%;
      `};
  }
  @media (max-width: 768px) {
    display: ${(props) => props.varient === "logo" && "none"};
    flex-direction: ${(props) => props.varient === "logoFooter" && "row"};

    ${(props) =>
      props.varient === "secondary" &&
      css`
        position: fixed;
        left: 15px;
        top: 1px;
        flex-direction: row;
      `};
  }

  & .app-icon {
    margin-right: 0px;

    width: 70px;
    height: 70px;
    @media (min-width: 600px) {
      width: 110px;
      height: 110px;
    }
  }
  & span {
    margin: 0px 20px;
  }
`;
export const WrapperProcces = styled.div`
  margin-top: 1rem;
  padding: 50px 0px;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  & img {
    width: 340px;
    height: 189px;
    margin-right: -75px;

    @media (min-width: 768px) {
      width: 540px;
      height: 289px;
    }
    @media (min-width: 1024px) {
      gap: 60px;
      width: 640px;
      height: 389px;
    }
  }
`;
export const WrapperFooter = styled.footer`
  color: rgb(var(--color-secondary-0));
  padding: 50px 0px;
  display: grid;
  gap: 60px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (min-width: 768px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  & ul {
    margin: 10px 0px;
  }
  & li {
    cursor: pointer;
    z-index: 9999;
  }
  & .col-span-2 {
    grid-column: span 2 / span 2;
  }
`;

export const AboutBox = styled.div`
  ${(props) =>
    props.varient === "primary" &&
    css`
      display: grid;
      gap: 60px;
      grid-template-columns: repeat(1, minmax(0, 1fr));

      @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
      }
    `}
  ${(props) =>
    props.varient !== "primary" &&
    css`
      display: flex;
      justify-content: space-between;
    `}


  margin: 0px auto;
  align-items: center;
  padding-top: 10px;

  background-color: ${(props) =>
    props.varient === "boxPadding" && "rgb(var(--color-primary-100))"};

  padding: ${(props) => props.varient === "boxPadding" && " 10px 60px"};

  border-radius: ${(props) => props.varient === "boxPadding" && "12px"};

  gap: ${(props) => props.varient !== "boxPadding" && "45px"};

  & article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem 0rem;
  }

  & .user {
    margin: 0rem 0.7rem;
  }
  @media (min-width: 768px) {
    max-width: 878px;
  }
`;
