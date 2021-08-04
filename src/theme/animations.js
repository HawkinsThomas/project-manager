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

  @keyframes slidefromleft {
    from {
      left: 100%;
    }
    to {
      left: 0;
    }
  }

  @keyframes slidefromright {
    from {
      right: 100%;
    }
    to {
      right: 0;
    }
  }

  .animated { position: relative; }

  .fadein {
    animation: fadein 0.5s;
  }

  .floatin {
    position: relative;
    bottom: 0;
    animation: floatin 0.25s ease-out;
  }

  .slidefromleft {
    position: relative;
    animation: slidefromleft 0.25s ease-out;
  }

  .slidefromright {
    position: relative;
    animation: slidefromright 0.25s ease-out;
  }
`;

export default Animations;
