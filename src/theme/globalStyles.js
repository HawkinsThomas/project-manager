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
    transition: background-color 0.25s, color 0.25s;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  h1,h2,h3,h4,h5,h6 {
    margin-top: 0%;
  }

  h1 { font-size: 2rem; }
  h2 { font-size: 1.8rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.2rem; }
  h5 { font-size: 1rem; }
  h6 { font-size: 0.8rem; }

  hr { border: 1px solid ${(props) => props.theme.color.light}; }

  img {
    width: 100%;
    height: auto;
    display: none;
  }

  .button, .button-light {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 3px;

    :not(:last-child) {
      margin-right: 0.5rem;
    }
  }

  .button {
    color: white;
    background-color: ${(props) => props.theme.color.primary};

    :hover {
      background-color: ${(props) => props.theme.color.primaryLight};
    }
  }

  .button-light {
    color: ${(props) => props.theme.color.medium};
    background-color: ${(props) => props.theme.color.light};

    :hover {
      color: white;
      background-color: ${(props) => props.theme.color.medium};
    }
  }

  .button-wide {
    display: block;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    width: 100%;
    text-align: left;

    :hover {
      color: white;
      background-color: ${(props) => props.theme.color.primaryLight};
    }
  }
`;

export default GlobalStyle;
