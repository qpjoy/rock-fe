import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

type Props = {};

const GoodBad = (props: Props) => {
  const container = useRef<any>();
  const { contextSafe } = useGSAP({ scope: container });
  useGSAP(
    () => {
      gsap.to(".good", {
        x: 100,
      });
    },
    { scope: container }
  );

  const onClickBad = () => {
    gsap.to(".bad", { y: 100 });
  };

  const onClickGoodbad = contextSafe(() => {
    gsap.to(".goodbad", {
      rotation: 180,
    });
  }) as React.MouseEventHandler;
  return (
    <div ref={container}>
      <div className="good">Good</div>
      <div className="goodbad" onClick={onClickGoodbad}>
        Good not bad
      </div>
      <button onClick={onClickBad} className="bad">
        Bad
      </button>
    </div>
  );
};

export default GoodBad;
