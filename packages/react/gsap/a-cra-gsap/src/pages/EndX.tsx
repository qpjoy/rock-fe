import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef, useState } from "react";

type Props = {};
const randomX = gsap.utils.random(-200, 200, 1, true);

function Box({ children, endX }: any) {
  const boxRef = useRef<any>();
  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: endX,
      duration: 1,
    });
  }, [endX]);
  return (
    <div className="box gradient-blue" ref={boxRef}>
      {children}
    </div>
  );
}

const EndX = (props: Props) => {
  const [endX, setEndX] = useState(0);
  return (
    <div className="app">
      <button onClick={() => setEndX(randomX())}>
        Pass in a randomized value
      </button>
      <Box endX={endX}>{endX}</Box>
    </div>
  );
};

export default EndX;
