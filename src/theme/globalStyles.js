import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.font.primary};
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  *,
  :before,
  :after {
    font-size: inherit;
    box-sizing: border-box;
    transition: background-color 0.25s;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto;
    display: none;
  }

  .button {
    color: white;
    background-color: ${(props) => props.theme.color.primary};
    padding: 0.5rem 1rem;
    border-radius: 3px;

    :hover {
      background-color: ${(props) => props.theme.color.primaryLight};
    }
  }
`;

export default GlobalStyle;
