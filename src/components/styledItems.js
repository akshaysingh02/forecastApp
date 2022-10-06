// import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const primary_color = "#102d4e";
export const secondary_color = "#295686";

export const ParaColor = "#696767";

export const gradient = `linear-gradient(to bottom right, ${primary_color}, ${secondary_color});`;

// Global styles
export const GlobalStyle = createGlobalStyle`

body{
    padding: 3rem 3rem;
    background-image: ${gradient};
    background-attachment: fixed;
    scroll-behavior: smooth;
    transition: all .5s ease;
}
`;

//media query

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabS: '580px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}



export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tabS: `(max-width: ${size.tabS})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};