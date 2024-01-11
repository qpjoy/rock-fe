import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

type Props = {};

const RefSelector = (props: Props) => {
  const app = useRef<any>();
  const circle = useRef<any>();
  useGSAP(
    () => {
      gsap.to(".box", {
        rotation: "+=360",
      });
      gsap.to(circle.current, {
        rotation: "-=360",
      });
    },
    { scope: app }
  );
  return (
    <div ref={app} className="App">
      <div className="box gradient-blue">selector</div>
      <div className="circle gradient-green" ref={circle}>
        Ref
      </div>
    </div>
  );
};

export default RefSelector;
