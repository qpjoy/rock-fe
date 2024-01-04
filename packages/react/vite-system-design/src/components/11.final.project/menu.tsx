// @ts-nocheck
import { Inline } from "../06.inline.pattern";
import { Pad } from "../07.pad.pattern";
import { Logo } from "./logo";

import { styled } from "styled-components";

const Menu = styled(Inline).attrs(() => ({
  gutter: "l",
  as: Pad,
  padding: ["m", "xl"],
  align: "center",
  strech: 1,
}))`
  background: #0f1623;
  color: #fff;
  border-block-end: 1px solid #303030;
`;

const Item = styled(Pad).attrs(() => ({
  padding: ["s", "m"],
  as: "li",
}))`
  background: ${(props) => (props.active ? "#1f2937" : "transparent")};
  border-radius: 0.25rem;
  list-style-type: none;
`;

const SearchBar = styled(Pad).attrs(() => ({
  as: "input",
  padding: ["m", "l"],
}))`
  border-radius: 0.25rem;
  background: #1f2937;
  border: none;
  color: white;
`;

const MenuBar = () => {
  return (
    <div>
      <Menu>
        <Logo size="2.5rem" />
        <nav>
          <Inline as="ul" gutter="l">
            <Item active>Overview</Item>
            <Item>Position</Item>
            <Item>Candidates</Item>
            <Item>Employer</Item>
          </Inline>
        </nav>

        <SearchBar placeholder="Search" />
        <Logo square="true" size="1.5rem" />
        <Logo size="2rem" />
      </Menu>
    </div>
  );
};

export default MenuBar;