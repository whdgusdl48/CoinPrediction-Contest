import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
        font-family: inherit;
    }

    button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    main {
        padding-top: 70px;
        min-height: calc(100vh - 120px);

        @media only screen and (max-width: 800px) {
            padding-top: 60px;
        }
    }

    .inner {
        width: 100%;
        max-width: 1200px;
        padding: 0 20px;
        margin: 0 auto;
    }

    .mobileShow {
        display: none;

        @media only screen and (max-width: 800px) {
            display: block;
        }
    }
`;

export default GlobalStyles;
