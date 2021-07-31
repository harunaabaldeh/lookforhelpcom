import Link from "next/link";
import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Lookforhelp</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/">
          <NavLink>Counselling</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#stories">
          <NavLink>Stories</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#advice">
          <NavLink>Advice</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://google.com">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
