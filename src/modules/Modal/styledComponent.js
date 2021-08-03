import styled from 'styled-components';


export const StyledComponent = styled.div`
  animation: fadein 0.25s;
  background-color: ${(props) => props.theme.overlay.dark};
  position: fixed;
  top: 4rem;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
  .popup {
    background-color: white;
    border-radius: 5px;
    width: 100%;
    max-width: 600px;
    max-height: 100%;
    overflow-y: scroll;
    padding: 2rem;

    ::-webkit-scrollbar {
      width: 0;
    }

    h3 {
      border-bottom: 3px solid ${(props) => props.theme.color.primary};
      padding-bottom: 1rem;
      margin-top: 0;
    }

    #close {
      float: right;
      color: inherit;
      background-color: inherit;
      transition: color 0.25s;
      
      :hover {
        color: ${(props) => props.theme.color.primary}
      }
    }
  }
`;
