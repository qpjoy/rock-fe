import React from "react";
// import gsap from "https://esm.sh/gsap";
// import { useGSAP } from "https://esm.sh/@gsap/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import "./CircleSquare.css";

const { useRef } = React;

function CircleSquare() {
  const app = useRef<any>();
  const circle = useRef<any>();

  useGSAP(
    () => {
      // use selectors...
      gsap.to(".box", { rotation: "+=360" });

      // or refs...
      gsap.to(circle.current, { rotation: "-=360" });
    },
    { scope: app }
  ); // <-- scope for selector text (optional)

  return (
    <div ref={app} className="App">
      <div className="box gradient-blue">selector</div>
      <div className="circle gradient-green" ref={circle}>
        Ref
      </div>
    </div>
  );
}

export default CircleSquare;
