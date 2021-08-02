import React from 'react';
import background from 'img/city_banner.jpg';

// Modules
import Banner from 'modules/Banner';

import { StyledComponent } from './styledComponent';


const About = () => (
  <StyledComponent>
    <Banner background={background}>
      <h1>Project Manager</h1>
      <p>A hobby project by Johnathan LeBlanc and Thomas Hawkins.</p>
    </Banner>
    <section>
      <article className="about">
        <h2>About</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,&nbsp;
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </article>
      <article className="team">
        <h2>The Team</h2>
        <div className="members">
          <div>
            <span>Image here</span>
            <h3>Johnathan LeBlanc</h3>
            <span>React Specialist, Front-end Developer</span>
          </div>
          <div>
            <span>Image here</span>
            <h3>Thomas Hawkins</h3>
            <span>Dev ops, Back-end Developer</span>
          </div>
        </div>
      </article>
    </section>
  </StyledComponent>
);

export default About;
