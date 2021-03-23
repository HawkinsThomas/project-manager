import { devices } from 'constants.js';
import styled from 'styled-components';


export const StyledBackground = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: ${(props) => props.height};
  position: relative;
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 50%;
    background: rgba(50,50,50,0.6);
  }

  @media screen and (${devices.tablet}) {
    &:before {
      right: 0;
    }
  }
`;

export const StyledContent = styled.div`
  position: relative;

  > h1 {
    color: white;
    margin-top: 0;
    text-shadow: 0 2px 4px rgb(100,100,100);
  }

  > p {
    color: white;
    font-size: 18px;
    border-left: 2px solid var(--main-color-1);
    padding-left: 2em;
    margin-bottom: 2em;
  }
`;
