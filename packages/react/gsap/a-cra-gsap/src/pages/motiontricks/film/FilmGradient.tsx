import * as React from "react";
import { gsap } from "gsap";
import { ReactComponent as FilmSVG } from "./filmGradient.svg";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import useStateRef from "../../../hooks/useStateRef";
import "./FilmGradient.module.css";

type Props = {};

const FilmGradient = (props: Props) => {
  const filmRef = useRef<any>();
  const counter = useRef<any>();
  const [count, setCount, countRef] = useStateRef(0);
  useGSAP(
    () => {
      setCount(10);
      counter.current = 10;

      gsap
        .timeline({
          defaults: { duration: 1, ease: "none" },
          repeat: countRef.current - 1,
          onRepeat: () => setCount(countRef.current - 1),
        })
        .to("#rotator", { rotation: 360, svgOrigin: "600 450" })
        .from(".big", { drawSVG: 0 }, "<");
    },
    {
      scope: filmRef,
    }
  );

  // let count = 10;
  // let countDown = document.querySelector("#counter");
  // countDown.textContent = count;

  // gsap
  //   .timeline({
  //     defaults: { duration: 1, ease: "none" },
  //     repeat: count - 1,
  //     onRepeat: changeIt,
  //   })
  //   .to("#rotator", { rotation: 360, svgOrigin: "600 450" })
  //   .from(".big", { drawSVG: 0 }, "<");

  // function changeIt() {
  //   count--;
  //   countDown.textContent = count;
  // }
  return (
    <div className="film" ref={filmRef}>
      <svg
        id="movie"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 1200"
        width="200"
        height="1200"
      >
        <defs>
          <radialGradient
            id="filmGradient"
            cx="600"
            cy="450"
            r="340"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#e6e6e6" />
            <stop offset="0.1" stop-color="#d1d1d1" />
            <stop offset="1" stop-color="#1a1a1a" />
          </radialGradient>

          <mask id="filmMask" maskUnits="userSpaceOnUse">
            <circle
              className="big"
              cx="600"
              cy="450"
              transform="rotate(-90 600 450)"
              r="216"
              stroke="#fff"
              stroke-width="432"
              fill="none"
            />
          </mask>
        </defs>
        <g id="screenMaster">
          <ellipse
            id="shadow"
            cx="600"
            cy="1080.97"
            rx="375"
            ry="13"
            fill="#111"
            opacity="0.15"
          />
          <g id="supports" transform="translate(5,0)">
            <rect
              id="centerStand"
              x="583.78"
              y="117.91"
              width="18.76"
              height="718.65"
              fill="#878787"
            />
            <g id="leftLeg">
              <polygon
                id="ltLeg"
                points="442.91 1081.74 420.74 1082.24 586.17 796.3 602.41 805.69 442.91 1081.74"
                fill="#878787"
              />
              <path
                id="ltFoot"
                d="M447.28,1078.95a4.14,4.14,0,0,1-4.14,4.14h-21.9a4.14,4.14,0,0,1-4.14-4.14h0a4.14,4.14,0,0,1,4.14-4.14h21.9a4.14,4.14,0,0,1,4.14,4.14h0Z"
                fill="#f9b233"
              />
            </g>
            <g id="rightLeg">
              <polygon
                id="rtLeg"
                points="744.04 1081.44 766.21 1081.94 600.78 796.01 584.54 805.39 744.04 1081.44"
                fill="#878787"
              />
              <path
                id="rtFoot"
                d="M769.12,1078.95a4.14,4.14,0,0,1-4.14,4.14h-21.9a4.14,4.14,0,0,1-4.14-4.14h0a4.14,4.14,0,0,1,4.14-4.14H765a4.14,4.14,0,0,1,4.14,4.14h0Z"
                fill="#f9b233"
              />
            </g>
          </g>

          <rect
            id="screen"
            x="213.04"
            y="168.42"
            width="774.93"
            height="552.7"
            fill="#fff"
          />
          <rect
            id="centerShadowBottom"
            x="589.08"
            y="744.16"
            width="18.16"
            height="18.61"
            fill="#575756"
          />

          <g id="screenBars">
            <g id="screenTop">
              <rect
                id="topCore"
                x="168.78"
                y="154.36"
                width="863.43"
                height="17.97"
                rx="4"
                ry="4"
                fill="#c6c6c6"
              />
              <rect
                id="topBar"
                x="180.57"
                y="148.21"
                width="839.87"
                height="30.3"
                rx="8"
                ry="8"
                fill="#4c4c4c"
              />
              <rect
                id="topHighlight"
                x="188.62"
                y="166.93"
                width="825.31"
                height="6.14"
                fill="#fff"
                opacity="0.2"
              />
            </g>

            <g id="screenBottom">
              <rect
                id="bottomCore"
                x="168.78"
                y="722.05"
                width="863.43"
                height="17.97"
                rx="4"
                ry="4"
                fill="#c6c6c6"
              />
              <rect
                id="bottomBar"
                x="180.57"
                y="715.34"
                width="839.87"
                height="34.63"
                rx="8"
                ry="8"
                fill="#4c4c4c"
              />
              <rect
                id="bottomHighlight"
                x="187.28"
                y="722.54"
                width="825.31"
                height="6.14"
                fill="#fff"
                opacity="0.2"
              />
            </g>
          </g>
        </g>
        <g id="film">
          <rect
            width="700"
            height="500"
            x="250"
            y="200"
            rx="30"
            ry="30"
            opacity="0.5"
            fill="url(#filmGradient)"
          />
          <g mask="url(#filmMask)">
            <rect
              width="700"
              height="500"
              x="250"
              y="200"
              rx="30"
              ry="30"
              fill="url(#filmGradient)"
            />
          </g>

          <g stroke-width="2">
            <circle cx="600" cy="450" r="175" stroke="#111" fill="none" />
            <circle cx="600" cy="450" r="150" stroke="#fff" fill="none" />
            <circle cx="600" cy="450" r="110" stroke="#fff" fill="none" />
            <line x1="350" y1="450" x2="850" y2="450" stroke="#111" />
            <line x1="600" y1="220" x2="600" y2="680" stroke="#111" />
          </g>

          <line
            id="rotator"
            x1="600"
            y1="275"
            x2="600"
            y2="450"
            stroke="#333"
            stroke-width="3"
          />
          <text
            ref={counter}
            id="counter"
            text-anchor="middle"
            x="600"
            y="535"
            font-size="250"
          >
            {count}
          </text>
        </g>
      </svg>
    </div>
  );
};

export default FilmGradient;
