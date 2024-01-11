import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

type Props = {};

const Nested = () => {
  return (
    <div className="nested">
      <div className="box gradient-green">'Leaking' scope</div>
      <div className="circle gradient-blue">No 'leaking'</div>
    </div>
  );
};

const RotateSquare = (props: Props) => {
  const container = useRef<any>();
  const circle = useRef<any>();

  useGSAP(
    () => {
      gsap.to(".box", {
        rotation: "+=360",
        duration: 3,
        repeat: -1,
        ease: "none",
      });

      gsap.to(circle.current, {
        rotation: "+=360",
        duration: 3,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: container }
  );
  return (
    <div ref={container} className="App">
      <div className="box gradient-green">Using selector</div>
      <div className="circle gradient-blue" ref={circle}>
        Using Ref
      </div>
      <Nested />
    </div>
  );
};

export default RotateSquare;
