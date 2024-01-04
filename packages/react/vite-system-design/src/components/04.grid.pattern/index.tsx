// @ts-nocheck
import { styled } from "styled-components";
import Card from "./card";
import { spaceSchema } from "../common/spaces";

export const Grid = styled.div`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.minItemWidth ?? "310px"}, 1fr)
  );
`;

function Cards() {
  return (
    <Grid minItemWidth="20rem" gutter="xl">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
}

export default Cards;