import styled from 'styled-components';


export const StyledBackground = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
`;

export const StyledContent = styled.div`
  background-color: ${(props) => props.theme.overlay.dark};
  padding: 5rem 10%;
  width: 50%;

  > h1 {
    color: white;
    margin-top: 0;
    text-shadow: 0 2px 4px rgb(100,100,100);
  }

  > p {
    color: white;
    font-size: 18px;
    border-left: 2px solid ${(props) => props.theme.color.primary};
    padding-left: 2em;
    margin-bottom: 2em;
  }
`;
