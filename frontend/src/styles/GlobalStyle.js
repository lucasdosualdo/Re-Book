import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Lobster&family=Ubuntu:wght@400;500;700&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

*,
*::after,
*::before {
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

:root {
--pink-color: #B20056;
--blue-color: #002141;
--mid-dark-blue-color: #05192b;
--dark-blue-color: #021323;
--gray-color: #D9D9D9;
--white-color: #ffffff;
}

body {
  font-size: 1.6rem;
  font-family: 'Lato', sans-serif;
  background-color: #021323;
  padding-top: 8vh;
}
li {
  list-style: none;

}
p {
  text-decoration: none;
  color: var(--gray-color);
  cursor: pointer;
}

.nav {
  display: flex;
  align-items: center;
  height: 8vh;
  background: var(--blue-color);
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2;
}
.nav-brand {
  text-transform: uppercase;
  margin-right: 80px;
}

 .nav-menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;
} 

.nav-toggler {
  display: none;
  cursor: pointer;
} 

.nav-toggler div {
  width: 2.5rem;
  height: 0.2rem;
  margin: 0.4rem;
  background: var(--gray-color);
  transition: 0.3s ease-in;

}

 @media screen and (max-width: 768px) {
  .nav {
    justify-content: space-between;
  }
  .nav-toggler {
    display: block;
    cursor: pointer;
  }
  .nav-menu {
    position: fixed;
    top: 7vh;
    right: 0;
    height: 93vh;
    width: 50vw;
    background: var(--blue-color);
    flex-direction: column;
    transform: translateX(100%);
    transition: 0.5s ease-in;
  }
} 
/* Active Class */
.nav-active {
  transform: translateX(0%);
}

/* Toggle Icon Animation */

.toggle .line1 {
  transform: rotate(-45deg) translate(-4px, 5px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-4px, -5px);
}
.search-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;

}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  opacity: 1;
  transition: opacity 400ms ease-in;
}

.fade-exit {
  opacity: 1;
}

.fade-exit-active {
  opacity: 0;
  transition: opacity 400ms ease-out;
}

.hide {
  display: none;
}

nav.no-header {
  display: none;
}

`;

export default GlobalStyle;
