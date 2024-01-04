// @ts-nocheck
import { styled, css } from "styled-components";
import { InlineBundle } from "../05.inline_bundle.pattern";
import { Button, Logo, MenuWrapper } from "./components";

const stretchSchema = {
  all: `> * {flex: 1}`,
  start: `> : first-child { flex: 1 }`,
  end: `> : last-child {flex: 1 }`,
};

const responsive = css`
  --switchAt: ${({ switchAt }) => {
    typeof switchAt === "string" ? switchAt : `${switchAt}px`;
  }};

  flex-wrap: wrap;

  > * {
    min-width: fit-content;
    flex-basis: calc((40rem - (100% - var(--gutter))) * 999);
  }
`;

export const Inline = styled(InlineBundle)`
  flex-wrap: nowrap;
  ${({ stretch }) => {
    if (typeof stretch === "number") {
      return `> :nth-child(${stretch + 1}) {flex: 1}`;
    }
    return stretchSchema[stretch] ?? stretchSchema.all;
  }}

  ${({ switchAt }) => switchAt && responsive}
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <Inline stretch={1} align="center">
        <div>
          <Logo />
        </div>
        <InlineBundle gutter="m" justify="center" align="center">
          <span>Books</span>
          <span>Authors</span>
          <span>Deals</span>
          <span>About Us</span>
        </InlineBundle>
        <Inline justify="end" align="center">
          <span>Login</span>
          <Button>Register</Button>
        </Inline>
      </Inline>
    </MenuWrapper>
  );
};

export default Menu;