import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          lookforhelp
        </SectionTitle>
        <SectionText>
          The purpose for lookforhelp is provide security and trust between
          couselliors and patients find real people with the problem you have to
          have courage read other people stories
        </SectionText>
        <Button onClick={props.handleClick}>Get Started</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
