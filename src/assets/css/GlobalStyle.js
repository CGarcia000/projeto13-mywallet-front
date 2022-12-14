import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        color: #666666;
        font-family: 'Raleway', sans-serif;
    }
    html{
    }
    body {
        -webkit-font-smoothing: antialiased !important;
        background-color: #8C11BE;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
    }

    body html #root {
        height: 100%;
    }

    body > #root > div {
        height: 100%;
    }
`;

export default GlobalStyle;