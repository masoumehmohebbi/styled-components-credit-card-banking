import { createGlobalStyle } from "styled-components";
import VazirReqularWoff2 from "/fonts/Vazirmatn-Regular.woff2";
import VazirReqularWoff from "/fonts/Vazirmatn-Regular.woff";
import VazirReqularTtf from "/fonts/Vazirmatn-Regular.ttf";
import VazirReqularEot from "/fonts/Vazirmatn-Regular.eot";

import VazirBoldWoff2 from "/fonts/Vazirmatn-Bold.woff2";
import VazirBoldWoff from "/fonts/Vazirmatn-Bold.woff";
import VazirBoldTtf from "/fonts/Vazirmatn-Bold.ttf";
import VazirBoldEot from "/fonts/Vazirmatn-Bold.eot";

import VazirBlackWoff2 from "/fonts/Vazirmatn-Black.woff2";
import VazirBlackWoff from "/fonts/Vazirmatn-Black.woff";
import VazirBlackTtf from "/fonts/Vazirmatn-Black.ttf";
import VazirBlackEot from "/fonts/Vazirmatn-Black.eot";

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

    @font-face {
    font-family: "Vazir";
    font-style: normal;
    font-weight: 400;
    src: url(${VazirReqularWoff2}) format('woff2'),
        url(${VazirReqularWoff}) format('woff'),
        url(${VazirReqularTtf}) format('ttf'),
        url(${VazirReqularEot}) format('eot'),
    }
    

    @font-face {
    font-family: "Vazir";
    font-style: normal;
    font-weight: 700;
    src: url(${VazirBoldWoff2}) format('woff2'),
        url(${VazirBoldWoff}) format('woff'),
        url(${VazirBoldTtf}) format('ttf'),
        url(${VazirBoldEot}) format('eot'),
    }

    @font-face {
    font-family: "Vazir";
    font-style: normal;
    font-weight: 900;
    src: url(${VazirBlackWoff2}) format('woff2'),
        url(${VazirBlackWoff}) format('woff'),
        url(${VazirBlackTtf}) format('ttf'),
        url(${VazirBlackEot}) format('eot'),
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
  

`;
export default GlobaloStyle;
