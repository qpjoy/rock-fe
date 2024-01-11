import React, { useRef, useState } from "react";
import "./RevertRender.css";
import { gsap, random } from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {};
const randomX = gsap.utils.random(-200, 200, 1, true);

function Box({ endX }: any) {
  const revert = useRef<any>();
  useGSAP(
    () => {
      gsap.to(revert.current, {
        x: endX,
        duration: 1,
        delay: 0.2,
      });
    },
    {
      dependencies: [endX],
      revertOnUpdate: true,
    }
  );
  return (
    <div ref={revert} className="box gradient-blue">
      reverted
    </div>
  );
}

function Circle({ endX }: any) {
  const noRevert = useRef<any>();

  useGSAP(() => {
    gsap.to(noRevert.current, {
      x: endX,
      duration: 1,
      delay: 0.2,
    });
  }, [endX]);
  return (
    <div ref={noRevert} className="circle gradient-green">
      not reverted
    </div>
  );
}

const RevertRender = (props: Props) => {
  const [endX, setEndX] = useState(0);
  return (
    <div className="app">
      <button onClick={() => setEndX(randomX())}>
        Pass in a randomized value: {endX}
      </button>
      <Box endX={endX}>{endX}</Box>
      <Circle endX={endX}>{endX}</Circle>
    </div>
  );
};

export default RevertRender;
