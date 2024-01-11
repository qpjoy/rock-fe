import React, { useRef } from "react";
import "./QuickTo.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

type Props = {};

const QuickTo = (props: Props) => {
  const xTo = useRef<any>();
  const yTo = useRef<any>();
  const app = useRef<any>();

  const { context, contextSafe } = useGSAP(
    () => {
      xTo.current = gsap.quickTo(".flair", "x", {
        duration: 0.1,
        ease: "power3",
      });
      yTo.current = gsap.quickTo(".flair", "y", {
        duration: 0.1,
        ease: "power3",
      });
    },
    { scope: app }
  );
  const moveShape = contextSafe((e: any) => {
    xTo.current(e.clientX);
    yTo.current(e.clientY);
  });
  return (
    <div className="app" ref={app} onMouseMove={(e) => moveShape(e)}>
      <p>Move your mouse around</p>
      <div className="flair" />
    </div>
  );
};

export default QuickTo;
