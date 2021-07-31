import React from "react";
import { BsFillPersonFill, BsFillPeopleFill } from "react-icons/bs";
import { DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./AdviceStyles";
import Button from "../../styles/GlobalComponents/Button";

const Advice = () => (
  <Section id="advice">
    <SectionDivider divider />
    <SectionTitle>Advice</SectionTitle>
    <SectionText>
      The advice section of lookforhelp is here to provide you with accurate
      essential information about mental health. Articles are written by
      passionate mental health advocates and are reviewed by professional
      licensed therapists for accuracy.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <BsFillPersonFill size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Individual</ListTitle>
          {/* <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BsFillPeopleFill size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Couples</ListTitle>
          {/* <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Teen</ListTitle>
          {/* <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph> */}
        </ListContainer>
      </ListItem>
    </List>
    <Button>Read More</Button>
    <SectionDivider colorAlt />
  </Section>
);

export default Advice;
