import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

function Box({ children, endX }: any) {
  const boxRef = useRef<any>();

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: endX,
      duration: 3,
    });
  }, [endX]);

  return (
    <div className="box gradient-blue" ref={boxRef}>
      {children}
    </div>
  );
}

export default Box;
