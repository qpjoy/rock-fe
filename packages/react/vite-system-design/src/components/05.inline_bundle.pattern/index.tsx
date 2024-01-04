// @ts-nocheck
import { styled } from "styled-components";
import { spaceSchema } from "../common/spaces";
import MenuBasis from "./menu";

const justifySchema = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

export const InlineBundle = styled.div`
  --gutter: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    justifySchema[props.justify] ?? justifySchema.start};
  align-items: ${(props) => justifySchema[props.align] ?? justifySchema.start};
  gap: var(--gutter);
`;

const BundledMenu = () => {
  return (
    <MenuBasis>
      <InlineBundle gutter="l" justify="end" align="center">
        <span>Books</span>
        <span>Authors</span>
        <span>Deals</span>
        <span>About Us</span>
        <span>Sign-in</span>
      </InlineBundle>
    </MenuBasis>
  );
};

export default BundledMenu;