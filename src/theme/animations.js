import { createGlobalStyle } from 'styled-components';


const Animations = createGlobalStyle`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1
    }
  }

  @keyframes floatin {
    from {
      bottom: -1rem;
      opacity: 0;
    }
    to {
      bottom: 0;
      opacity: 1;
    }
  }

  .fadein {
    animation: fadein 0.5s;
  }

  .floatin {
    position: relative;
    bottom: 0;
    animation: floatin 0.25s ease-out;
  }
`;

export default Animations;
