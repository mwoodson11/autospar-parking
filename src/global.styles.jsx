import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${({theme}) => theme.color.primary};
    font-family: ${({theme}) => theme.font.main};
    background-color: ${({theme}) => theme.color.background};
    transition: background-color .4s ease, color .4s ease;
  }

  
`