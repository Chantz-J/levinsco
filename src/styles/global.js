import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
    html {
        font-size: 10px;
    }

    html, 
    body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    html, 
    body,
    #root,
    .App { 
        height: 100%;
    }
        

    *, ::before, ::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.8rem;
        line-height: 1;
        font-weight: 400;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    a, a:hover {
        transition: all .4s ease-in-out;
    }

    .main {
        width: 100%;
        height: calc(100% - 6.5rem);
        max-width: 100%;
        padding: 0 10px;
        margin 0 auto;
    }
`