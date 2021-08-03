import styled from 'styled-components';


export const StyledComponent = styled.main`
  display: grid;
  grid-template-columns: 10% 3fr 1fr 10%;
  grid-template-rows: auto;
  grid-template-areas:
    "heading heading heading heading"
    ".       section aside   ."
  ;

  .heading { grid-area: heading; }
  section {
    grid-area: section;
    padding: 3rem 0;
  }
  
  aside {
    grid-area: aside;
    padding: 3rem;
  }

  .quick-details {
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.color.light};
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
  }
`;
