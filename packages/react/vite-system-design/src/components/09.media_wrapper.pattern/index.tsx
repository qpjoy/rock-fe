// @ts-nocheck
import { styled } from "styled-components";
import { Grid } from "../04.grid.pattern";
import { Description } from "./components";

const MediaWrapper = styled.div`
  position: relative;

  --n: ${(props) => (props.ratio ? props.ratio[0] : 1)};
  --d: ${(props) => (props.ratio ? props.ratio[1] : 1)};

  ${(props) =>
    props.ratio &&
    `aspect-ratio: var(--n) / var(--d);
  @supports not (aspect-ratio: 1/1) {
    padding-block-end: calc(var(--d) / var(--n) * 100%);
  }`}

  > * {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > img,
  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NewProducts = () => {
  return (
    <div>
      <MediaWrapper ratio={[16, 9]}>
        <img
          src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
          alt=""
        />
      </MediaWrapper>
      <Description>White T-shirt - $19.99</Description>
    </div>
  );
};

const NewProductsList = () => {
  return (
    <Grid gutter="xl" minItemWidth="18rem">
      <NewProducts />
      <NewProducts />
      <NewProducts />
      <NewProducts />
    </Grid>
  );
};

export default NewProductsList;