import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

type Props = {};

const BoxClass = (props: Props) => {
  const container = useRef<any>();
  useGSAP(
    () => {
      gsap.from(".box", {
        opacity: 0,
        stagger: 0.1,
      });
    },
    { scope: container }
  );
  return (
    <div ref={container} className="App">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  );
};

export default BoxClass;
