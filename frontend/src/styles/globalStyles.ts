import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Roboto', sans-serif;
    }

    body,#__next{
        width:100vw;
        height:100vh;
    }
`;
