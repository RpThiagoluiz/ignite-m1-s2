import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --red: #e52e4d;
  --blue: #5429cc;
  --green: #33cc95;

  --blue-light: #6933ff;

  --text-title: #363F5F;
  --text-body: #969CB3;

  --background:#f0f2f5;
  --shape: #ffffff;
}

* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

//Padrao o tamanho da font 16px(desktop);

html{
  @media(max-width: 1080px){
    font-size:93.75% //15px
  }
  @media(max-width: 720px){
    font-size:87.5% //15px
  }
}

body{
  background: var(--background);
  -webkit-font-smoothing: antialiased; //fonte mais nitidas!
}

body,input, textarea,button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400; //tamanho padrao do html 500
}

h1,h2,h3,h4,h5,h6 strong{
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`;
