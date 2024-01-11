import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

type Props = {};

const Box = ({ children, className, anim }: any) => {
  return (
    <div className={"box " + className} data-animate={anim}>
      {children}
    </div>
  );
};

const RotateMove = (props: Props) => {
  const container = useRef<any>();
  useGSAP(
    () => {
      gsap.to("[data-animate='rotate']", {
        rotation: 360,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });

      gsap.to("[data-animate='move'", {
        x: 50,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });
    },
    { scope: container }
  );
  return (
    <div className="app" ref={container}>
      <Box anim="rotate" className="gradient-blue">
        Box
      </Box>
      <Box className="dont-animate gradient-red">Don't Animate</Box>
      <Box anim="move" className="gradient-blue">
        Box
      </Box>
    </div>
  );
};

export default RotateMove;
