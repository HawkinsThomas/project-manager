import styled from 'styled-components';


export const StyledComponent = styled.header`
  background-color: ${(props) => props.theme.color.light};
  color: ${(props) => props.theme.color.dark};
  padding: 1.25rem 10%;
  position: sticky;
  top: 0;
  z-index: 9999;

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
