import React, { useRef } from "react";
import "./ToggleTimeline.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

type Props = {};

function Box({ children }: any) {
  return <div className="box gradient-blue">{children}</div>;
}

function Circle({ children }: any) {
  return <div className="circle gradient-green">{children}</div>;
}

const ToggleTimeline = (props: Props) => {
  const container = useRef<any>();
  const tl = useRef<any>();
  const { contextSafe } = useGSAP(
    () => {
      console.log("creating timeline");
      tl.current = gsap
        .timeline()
        .to(".box", {
          rotation: 360,
        })
        .to(".circle", {
          x: 100,
        });
    },
    { scope: container }
  );
  const toggleTimeline = contextSafe(() => {
    tl.current.reversed(!tl.current.reversed());
  }) as React.MouseEventHandler<HTMLButtonElement>;
  return (
    <div className="app" ref={container}>
      <div>
        <button onClick={toggleTimeline}>Toggle</button>
        <Box>box</Box>
        <Circle>circle</Circle>
      </div>
    </div>
  );
};

export default ToggleTimeline;
