import styled from 'styled-components';


export const StyledForm = styled.div`
  .controls {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 2px solid ${(props) => props.theme.color.light};
    margin-bottom: 1rem;
  }

  .tab-button {
    width: 49%;

    :disabled {
      color: white;
      background-color: ${(props) => props.theme.color.medium};
      cursor: default;
    }
  }
`;
