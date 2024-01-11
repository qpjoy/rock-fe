import { gsap } from "gsap";
import { forwardRef, useRef, useImperativeHandle } from "react";
import { styled } from "styled-components";

const StyledCursor = styled.div`
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  will-change: transform;
  transform: translate(-50%, -50%);
  background-color: #9d9d9c;
  border-radius: 100%;
  pointer-events: none;
`;

const Cursor = forwardRef((props, ref) => {
  const el = useRef<any>();
  useImperativeHandle(
    ref,
    () => {
      // return our API
      return {
        moveTo(x: any, y: any) {
          gsap.to(el.current, { x, y });
        },
      };
    },
    []
  );
  return <StyledCursor ref={el}></StyledCursor>;
});

export default Cursor;
