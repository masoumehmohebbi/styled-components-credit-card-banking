import { createGlobalStyle } from "styled-components";

const GlobaloStyle = createGlobalStyle`
    :root{
        --background-app-rgb:61, 84, 77;
        --color-primary-900:28, 28, 28;
        --color-primary-800:26, 30, 28;
        --color-primary-100: 34,43,40;
        --color-primary-50: 128, 203, 134;

        --color-secondary-50: 173, 178, 177;
        --color-secondary-0: 255, 255, 255;
    }
    
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: "Vazir";
    min-height: 100vh;
    user-select: none;
    background-color: rgb(var(--color-primary-900));
    
    /* ----------------------------- style scrollbar ---------------------------- */
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
