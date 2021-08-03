import styled from 'styled-components';


export const StyledAccordion = styled.div`
  border: 1px solid ${(props) => props.theme.color.light};

  button {
    display: block;
    width: 100%;
    padding: 0.5rem;
    background-color: white;

    font-size: 0.8rem;
    font-weight: 600;
    text-align: left;
    text-transform: uppercase;

    :hover {
      background-color: ${(props) => props.theme.color.light};
    }
  }

  .content {
    border-top: 1px solid ${(props) => props.theme.color.light};
    padding: 1rem;
  }
`;
