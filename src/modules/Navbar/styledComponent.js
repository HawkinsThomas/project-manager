import styled from 'styled-components';


export const StyledComponent = styled.header`
  background-color: white;
  color: ${(props) => props.theme.color.dark};
  padding: 1.25rem 10%;
  position: sticky;
  top: 0;
  z-index: 9999;

  /* DEVELOPMENT STUFF */

  [class*="color-"] {
    width: 20px;
    height: 20px;
    display: inline-block;
  }

  .color-1 { background-color: ${(props) => props.theme.color.primary}; margin-left: 1rem; }
  .color-2 { background-color: ${(props) => props.theme.color.primaryLight}; }
  .color-3 { background-color: ${(props) => props.theme.color.primaryDark}; }
  .color-4 { background-color: ${(props) => props.theme.color.light}; }
  .color-5 { background-color: ${(props) => props.theme.color.medium}; }
  .color-6 { background-color: ${(props) => props.theme.color.dark}; }

  /* END DEVELOPMENT STUFF */

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font-size: 1.25rem;
      font-weight: 600;
    }

    .navigation ul {
      display: flex;
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        padding: 0.5rem 1rem;
        transition: color 0.25s;
        
        :hover {
          color: ${(props) => props.theme.color.primary};
        }
      }
    }
  }
`;
