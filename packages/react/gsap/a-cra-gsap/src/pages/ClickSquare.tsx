import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";

type Props = {};

const ClickSquare = (props: Props) => {
  const { contextSafe } = useGSAP();
  const onEnter = contextSafe(({ currentTarget }: any) => {
    gsap.to(currentTarget, {
      rotation: "+=360",
    });
  }) as React.MouseEventHandler;
  return (
    <div className="app flex-row">
      <div className="box gradient-blue" onClick={onEnter}>
        Click Me
      </div>
    </div>
  );
};

export default ClickSquare;
