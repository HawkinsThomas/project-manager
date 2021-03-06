import styled from 'styled-components';


export const StyledComponent = styled.main`
  display: grid;
  grid-template-columns: 10% 3fr 1fr 10%;
  grid-template-rows: auto;
  grid-template-areas:
    "heading  heading heading heading"
    "banner   banner  banner  banner"
    ".        section aside   ."
  ;

  .heading { grid-area: heading; }
  .banner { grid-area: banner; }

  section {
    grid-area: section;
    padding: 3rem 0;
  }

  aside {
    grid-area: aside;
    padding: 3rem;
  }

  .project-details {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1rem;
  }
`;
