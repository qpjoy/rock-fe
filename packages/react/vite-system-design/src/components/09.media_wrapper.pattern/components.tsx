// @ts-nocheck
import { Pad } from "../07.pad.pattern";
import { Center } from "../08.center.pattern";

export const Description = (props) => (
  <Pad padding="l">
    <Center centerText>{props.children}</Center>
  </Pad>
);