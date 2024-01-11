import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Box from "./components/Box";
import Circle from "./components/Circle";
import CircleSquare from "./pages/CircleSquare";
import { Route, Routes } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import GoodBad from "./pages/GoodBad";
import ClickSquare from "./pages/ClickSquare";
import RemoveListener from "./pages/RemoveListener";
import RefSelector from "./pages/RefSelector";
import BoxRef from "./pages/BoxRef";
import BoxClass from "./pages/BoxClass";
import RotateSquare from "./pages/RotateSquare";
import RotateMove from "./pages/RotateMove";
import ToggleTimeline from "./pages/timeline/ToggleTimeline";
import DelayRender from "./pages/DelayRender";
import EndX from "./pages/EndX";
import RevertRender from "./pages/RevertRender";
import QuickTo from "./pages/QuickTo";
import Handwriting from "./pages/motiontricks/Handwriting";
import FilmGradient from "./pages/motiontricks/film/FilmGradient";

function App() {
  const container = useRef<any>();
  const box1 = useRef<any>();
  const box2 = useRef<any>();
  const box3 = useRef<any>();

  const toggleContainer = useRef<any>();
  const tl = useRef<any>();
  const { contextSafe } = useGSAP(
    () => {
      console.log(`creating timeline`);
      tl.current = gsap
        .timeline()
        .to(".box", {
          rotation: 360,
        })
        .to(".circle", {
          x: 100,
        });
    },
    { scope: toggleContainer }
  );
  const toggleTimeline: any = contextSafe(() => {
    tl.current.reversed(!tl.current.reversed());
  });

  // useGSAP(
  //   () => {
  //     gsap.to(".box", {
  //       rotation: "+=270",
  //       x: 100,
  //     });
  //   },
  //   { scope: container }
  // );

  useGSAP(() => {
    gsap.from(
      // gsap.fromTo(
      ".box",
      // [box1, box2, box3],
      {
        opacity: 0,
        stagger: 0.1,
      }
      // { opacity: 0.5, duration: 1 }
    );
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CircleSquare />} />
          <Route path="/circle-square" element={<CircleSquare />} />
          <Route path="/good-bad" element={<GoodBad />} />
          <Route path="/click-square" element={<ClickSquare />} />
          <Route path="/remove-listener" element={<RemoveListener />} />
          <Route path="/ref-selector" element={<RefSelector />} />
          <Route path="/box-ref" element={<BoxRef />} />
          <Route path="/box-class" element={<BoxClass />} />
          <Route path="/rotate-square" element={<RotateSquare />} />
          <Route path="/rotate-move" element={<RotateMove />} />
          <Route path="/toggle-timeline" element={<ToggleTimeline />} />
          <Route path="/delay-render" element={<DelayRender />} />
          <Route path="/end-x" element={<EndX />} />
          <Route path="/revert-render" element={<RevertRender />} />
          <Route path="/quick-to" element={<QuickTo />} />
          <Route path="/film" element={<FilmGradient />} />
          <Route path="/animate">
            <Route path="" element={<Handwriting />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

      {/* <div className="app" ref={toggleContainer}>
        <div>
          <button onClick={toggleTimeline}>Toggle</button>
        </div>
        <Box>box</Box>
        <Circle>circle</Circle>
      </div> */}
    </>
  );
}

export default App;
