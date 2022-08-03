import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html { font-size: 10px; } 

  body{
    background: ${props => props.theme.colors.offWhite};
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.secondaryFont};
    max-width: 144rem;
    margin: auto;
    font-size: 1.6rem;
  }

`;
