// @ts-nocheck
import { styled } from "styled-components";
import { Layers } from "../01.layers.pattern";

export const Center = styled.div`
  box-sizing: content-box;
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-inline-size: ${(props) => props.maxWidth};
  ${(props) => props.centerText && `text-align: center;`}
  ${(props) =>
    props.centerChildren &&
    `
        display: flex;
        flex-direction: column;
        align-items: center;
    `}
`;

function Profile() {
  return (
    <Center as={Layers} gutter="xs" maxWidth="60ch" centerText centerChildren>
      <h2>I am title</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quod
        animi dolores nisi ipsam voluptatem, quae laudantium aspernatur tenetur
        odio iste illo minus, sit autem facere a optio amet obcaecati?
      </p>
      <button>Button</button>
    </Center>
  );
}

export default Profile;