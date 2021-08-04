import styled from 'styled-components';


export const StyledForm = styled.div`
  h4 {
    padding-bottom: 1rem;
    border-bottom: 2px solid ${(props) => props.theme.color.light};
    margin-bottom: 1rem;
  }

  input[type="text"] {
    margin-bottom: 0.5rem;
  }

  button:disabled {
    cursor: default;
    color: white;
    background-color: ${(props) => props.theme.color.light};
  }

  [class*="button"] {
    display: block;
    margin: auto;
  }
`;
