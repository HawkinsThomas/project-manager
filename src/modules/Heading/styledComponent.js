import styled from 'styled-components';


export const StyledComponent = styled.h1`
  background-color: ${(props) => props.theme.color.light};
  margin: 0;
  padding: 1rem 10%;
  font-size: 1.2rem;
`;
