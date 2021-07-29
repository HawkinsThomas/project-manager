import styled from 'styled-components';


export const StyledComponent = styled.footer`
  color: white;

  .footer-top {
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.color.dark};
    padding: 2rem 10%;
  }

  .footer-bottom {
    text-align: center;
    background-color: black;
    padding: 1rem 10%;
  }
`;
