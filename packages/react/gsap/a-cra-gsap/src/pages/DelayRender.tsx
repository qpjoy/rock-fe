import React, { useEffect, useRef, useState } from "react";
import "./DelayRender.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

type Props = {};

const DelayRender = (props: Props) => {
  const app = useRef<any>();
  const box1 = useRef<any>();
  const box2 = useRef<any>();
  const box3 = useRef<any>();
  const [count, setCount] = useState(0);
  const [delayedCount, setDelayedCount] = useState(0);

  useGSAP(() => {
    gsap.to(box1.current, {
      rotation: "+=360",
    });
  });

  useGSAP(() => {
    gsap.to(box2.current, {
      rotation: "+=360",
    });
  }, [delayedCount]);

  useGSAP(() => {
    gsap.to(box3.current, {
      rotation: "+=360",
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setDelayedCount(count), 500);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="app" ref={app}>
      <div>
        <button onClick={() => setCount(count + 1)}>
          Click to trigger a render
        </button>
      </div>
      <p>Count: {count}</p>
      <p>Delayed Count: {delayedCount}</p>
      <p>Renders: {1 + delayedCount + count}</p>

      <div className="flex-row">
        <div ref={box1} className="box gradient-purple">
          First render
        </div>
        <div ref={box2} className="box gradient-blue">
          First render & delayed count change
        </div>
        <div ref={box3} className="box gradient-red">
          Every render
        </div>
      </div>
    </div>
  );
};

export default DelayRender;
