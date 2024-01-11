import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

type Props = {};

const RemoveListener = (props: Props) => {
  const container = useRef<any>();
  const badRef = useRef<any>();
  const goodRef = useRef<any>();

  useGSAP(
    (context, contextSafe: any) => {
      gsap.to(goodRef.current, { x: 100 });

      badRef.current.addEventListener("click", () => {
        gsap.to(badRef.current, { y: 100 });
      });

      const onClickGood = contextSafe(() => {
        gsap.to(goodRef.current, { rotation: 180 });
      });

      goodRef.current.addEventListener("click", onClickGood);

      return () => {
        goodRef.current.removeEventListener("click", onClickGood);
      };
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <button ref={badRef}>bad ClickFn</button>
      <button ref={goodRef}>good ClickFn</button>
    </div>
  );
};

export default RemoveListener;
