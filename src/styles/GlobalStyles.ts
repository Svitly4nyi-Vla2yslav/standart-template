import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --font-family: "Right Grotesk", sans-serif;
  --second-family: "Messina Sans Mono", sans-serif;
  --third-family: "Biro Script Plus", sans-serif;
  --font3: "Formular", sans-serif;
  --font4: "Roboto", sans-serif;
  --textColorWhite: #fff;
}
// @font-face {
//   font-family: '';
//   // src: url() format('truetype');
// }
//   @font-face {
// //   font-family: '';
//   // src: url() format('truetype');
// }

// @font-face {
//   font-family: '';
//   src: url() format('truetype');
// }

// @font-face {
//   font-family: '';
//   src: url() format('truetype');
// }

// @font-face {
//   font-family: '';
//   src: url() format('truetype');
// }

// @font-face {
//   font-family: '';
//   src: url() format('truetype');
// }

@keyframes move {
  from {
    tranform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
}
  


  body {

  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

 font-family: 'Roboto', sans-serif;
  background-color: #0129;
  background-size: auto 100%;
  background-position: center center;
  background-repeat: cover;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #111111;
  width: 100%;
  margin: 0;
  transition-duration: 300ms;
  overflow: hidden;

   background-color: ${(props) => props.theme.bodyBackground};
    color: ${(props) => props.theme.bodyText};
  }

  button {
    cursor: pointer;
    transition-duration: 300ms;
  }
  button:focus,
  button:hover {
    // background-color: lightgray; 
    // box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.6); 
  }

  a {
    cursor: pointer;
    transition-duration: 300ms;
    text-decoration: none;
    color: #FFFFFF;
  }
 

  img {
    cursor: pointer;
    transition-duration: 300ms;
  }



  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
 {
  font-family: 'Messina Sans Mono';
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
   
    }

    @keyframes move {
  from {
    tranform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}
 


 `;

export default GlobalStyles;