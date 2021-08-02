import styled from 'styled-components';


export const StyledRow = styled.tr`
  display: block;
  border: 1px solid ${(props) => props.theme.color.light};

  button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem;
    background-color: white;

    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;

    :hover {
      background-color: ${(props) => props.theme.color.light};
    }
  }
`;
