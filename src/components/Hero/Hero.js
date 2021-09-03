import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection} from './HeroStyles';
import {WritingEffect} from './WritingEffect';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        <h1 style = {{color:'magenta'}}>{`Hi, I am Ajay Kumar`}</h1>
      </SectionText>
      <WritingEffect />
      <Button onClick = {() => window.open('https://drive.google.com/u/0/uc?id=16_P6r8VsShewkzSPp1j8IbiHaFfGLRfu&export=download', '_blank')}>Download My CV</Button>
    </LeftSection>

  </Section>
);

export default Hero;