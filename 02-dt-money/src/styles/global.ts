import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --blue: #5429CC;
        --blue-light: #6933ff;
        --green: #33CC95;
        --red: #E62E4D;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(min-width: 1080px){
            font-size: 62.5%; // 10px
        }

        @media(max-width: 1080px){
            font-size: 56.25%; // 9px
        }

        @media(max-width: 720px){
            font-size: 37.5%; // 8px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    
    border-style,input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: .6;
        cursor: not-allowed;
    }
`
