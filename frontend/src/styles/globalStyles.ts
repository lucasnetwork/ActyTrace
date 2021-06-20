import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box
    }

    body,#__next{
        width:100vw;
        height:100vh;
    }
`;
