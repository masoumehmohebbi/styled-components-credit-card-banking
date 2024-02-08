import { createGlobalStyle } from "styled-components";
import { styled } from "styled-components";
const GlobaloStyle = createGlobalStyle`
    :root {
        &,
        &.light-mode {
        --background-app-rgb:61, 84, 77;
        --color-primary-100: 61, 84, 77;
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
    background-color: rgb(var(--background-app-rgb));
    }

    * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    /* border: none; */
    outline: none;
    padding: 0;
    margin: 0;
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
  background-color: white;
  margin: auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    max-width: 1024px;
  }
`;
