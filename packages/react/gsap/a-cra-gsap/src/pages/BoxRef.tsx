import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

type Props = {};

const BoxRef = (props: Props) => {
  const boxRef = useRef<any>();
  useGSAP(() => {
    console.log(boxRef);

    gsap.to(boxRef.current, {
      rotation: "+=360",
    });
  });
  return (
    <div className="App">
      <div className="box" ref={boxRef}>
        Hello
      </div>
    </div>
  );
};

export default BoxRef;
