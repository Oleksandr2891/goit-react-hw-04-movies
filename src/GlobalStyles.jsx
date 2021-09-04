import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);
html {
  box-sizing: border-box;
  width: 100vw;
  font-size: 12px;
  overflow-x: hidden;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  margin: 0;
	font-family: "Roboto", Arial, sans-serif;
	min-height: 100vh;
	background-color: #101010;
  /* overflow-y: hidden; */
}

h1,
h2,
h3,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;

}

.list {
  list-style: none;
}

`;


