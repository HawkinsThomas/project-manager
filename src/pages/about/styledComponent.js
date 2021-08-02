import styled from 'styled-components';


export const StyledComponent = styled.main`
  section {
    article { padding: 2rem 10%; }
    h2 { text-align: center; }

    .about {
      max-width: 80%;
      margin: auto;
    }

    .team {
      padding: 2rem;
      background-color: ${(props) => props.theme.color.light};
    }

    .members {
      display: flex;
      justify-content: space-around;
      text-align: center;
    }
  }
`;
