// @ts-nocheck
import React, { useEffect } from "react";
import "./Handwriting.css";
import { gsap } from "gsap";
import { ReactComponent as HwSvg } from "./handwriting.svg";

type Props = {};

const Handwriting = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      const demo = document.querySelector("#demo");
      const controls = document.querySelector("#controls");
      const colorArray = [
        "#46a4cc",
        "#94c356",
        "#eae047",
        "#a63e4b",
        "#e3aa59",
        "#a63ba0",
        "#a2a2a2",
        "#4c42d1",
        "#cf5b21",
      ];
      const swatches = gsap.utils.toArray("#swatches rect");
      let speed = 1;
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" },
      });
      const ease2 = "power2.inOut";
      const highlight = "#3fa9f5";

      gsap.set([controls, demo], {
        transformOrigin: "center center",
        xPercent: -50,
        autoAlpha: 1,
      });
      gsap.set("#hand", {
        yPercent: -100,
        transformOrigin: "center center",
      });
      gsap.set("#handSlider", {
        x: 26,
      });
      gsap.set(".thwWords path", {
        stroke: colorArray[0],
        drawSVG: 0,
      });
      gsap.set("#speedControl", {
        transformOrigin: "center center",
      });
      gsap.set(".theWords ellipse", {
        autoAlpha: 0,
        fill: colorArray[0],
      });
      gsap.set("#groupSizer", {
        autoAlpha: 0,
      });

      swatches.forEach((obj, i) => {
        obj.index = i;
        gsap.set(obj, { fill: colorArray[i] });
        obj.addEventListener("click", changeColor);
      });

      // toggle control timelines
      const iconTl = gsap.timeline({
        reversed: true,
        paused: true,
        defaults: { ease: "none", duration: 0.35 },
      });

      iconTl.to("#handSlider", { x: 0, ease: "power4.inOut" });
      iconTl.to("#hand", { autoAlpha: 0 }, 0);
      iconTl.to(".off", { opacity: 1, fill: highlight }, 0);
      iconTl.to(".on", { opacity: 0.35, fill: "#fff" }, 0);

      const themeTl = gsap.timeline({
        reversed: true,
        paused: true,
        defaults: { ease: "none", duration: 0.4 },
      });

      themeTl.to("#themeSlider", { x: 26, ease: "power4.inOut" });
      themeTl.to("#bg", { fill: "#fff" }, 0);
      themeTl.to(".light", { opacity: 1, fill: highlight }, 0);
      themeTl.to(".dark", { opacity: 0.35, fill: "#fff" }, 0);

      // button listeners
      document
        .querySelector("#playButton")
        .addEventListener("click", playTimeline);
      document
        .querySelector("#pauseButton")
        .addEventListener("click", pauseTimeline);
      document
        .querySelector("#handControl")
        .addEventListener("click", function () {
          toggle(iconTl);
        });
      document
        .querySelector("#themeControl")
        .addEventListener("click", function () {
          toggle(themeTl);
        });

      // create the tween speed draggable
      Draggable.create("#speedControl", {
        type: "rotation",
        bounds: {
          minRotation: -136,
          maxRotation: 136,
        },
        onDrag: speedUpdate,
      }); // end draggable create

      // adjust the animation timeScale()
      function speedUpdate() {
        let r = this.rotation;
        if (r < 0) {
          speed = 1 + r / 150;
        } else {
          speed = r / 25 + 1;
        }
        tl.timeScale(speed.toFixed(2));
      }

      // timeline play/pause controls
      function playTimeline() {
        if (tl.paused()) {
          tl.play();
          gsap.to(tl, { duration: 0.75, timeScale: speed });
          gsap.to(".play", {
            duration: 0.4,
            fill: highlight,
            opacity: 1,
            ease: "none",
          });
          gsap.to(".pause", {
            duration: 0.4,
            fill: "#fff",
            opacity: 0.35,
            ease: "none",
          });
        }
      }

      function pauseTimeline() {
        if (!tl.paused()) {
          gsap.to(tl, 0.75, {
            timeScale: 0,
            onComplete: function () {
              tl.pause();
            },
          });
          gsap.to(".pause", {
            duration: 0.4,
            fill: highlight,
            opacity: 1,
            ease: "none",
          });
          gsap.to(".play", {
            duration: 0.4,
            fill: "#fff",
            opacity: 0.35,
            ease: "none",
          });
        }
      }

      // function for the toggle switch timelines
      function toggle(t) {
        t.reversed() ? t.play() : t.reverse();
      }

      //change the  color of the stroke and dots
      function changeColor() {
        let newColor = colorArray[this.index];
        gsap.to(".theWords path", {
          duration: 1,
          stroke: newColor,
          ease: "none",
        });
        gsap.to(".theWords ellipse", {
          duration: 1,
          fill: newColor,
          ease: "none",
        });
      }

      // main timeline creation
      tl.to("#hPipe", { duration: 0.35, drawSVG: true });
      tl.to(
        "#hand",
        { duration: 0.35, motionPath: { path: "#hPipe", align: "#hPipe" } },
        0
      );
      // move to second part of h
      tl.to("#hand", { duration: 0.25, x: 364.08, y: 140.94, ease: ease2 });
      // start main h body
      tl.add("path2");
      tl.to("#hBody", { duration: 0.75, drawSVG: true }, "path2");
      tl.to(
        "#hand",
        { duration: 0.75, motionPath: { path: "#hBody", align: "#hBody" } },
        "path2"
      );
      //move to main path of 'handwriting'
      tl.to("#hand", { duration: 0.25, x: 430.67, y: 293.63, ease: ease2 });
      // start rest of first word
      tl.add("path3");
      tl.to("#mainPath", { duration: 5, drawSVG: true }, "path3");
      tl.to(
        "#hand",
        { duration: 5, motionPath: { path: "#mainPath", align: "#mainPath" } },
        "path3"
      );
      // move to first dot over i
      tl.to("#hand", { duration: 0.5, x: 926, y: 271.97, ease: ease2 });
      tl.to("#dot2", { duration: 0.15, autoAlpha: 1 });
      // move to horizontal cross on t
      tl.to("#hand", { duration: 0.3, x: 936.82, y: 232.3, ease: ease2 });
      // start cross of t
      tl.add("path4");
      tl.to("#tCross", { duration: 0.25, drawSVG: true }, "path4");
      tl.to(
        "#hand",
        { duration: 0.25, motionPath: { path: "#tCross", align: "#tCross" } },
        "path4"
      );
      // move to second i dot
      tl.to("#hand", { duration: 0.1, x: 1056.39, y: 271.97, ease: ease2 });
      tl.to("#dot1", { duration: 0.15, autoAlpha: 1 });
      // mpve to beginning of 'is'
      tl.to("#hand", { duration: 0.4, x: 474.84, y: 432, ease: ease2 });
      // start is path
      tl.add("path5");
      tl.to("#isPath", { duration: 0.75, drawSVG: true }, "path5");
      tl.to(
        "#hand",
        { duration: 0.75, motionPath: { path: "#isPath", align: "#isPath" } },
        "path5"
      );
      // move to dot of the i in 'is'
      tl.to("#hand", { duration: 0.25, x: 475.71, y: 406.97, ease: ease2 });
      tl.to("#dot3", { duration: 0.15, autoAlpha: 1 });
      // move to beginning of 'easy'
      tl.to("#hand", { duration: 0.25, x: 706, y: 468.5, ease: ease2 });
      // start 'easy' path
      tl.add("path6");
      tl.to("#easyPath", { duration: 2, drawSVG: true }, "path6");
      tl.to(
        "#hand",
        { duration: 2, motionPath: { path: "#easyPath", align: "#easyPath" } },
        "path6"
      );
      // move to period at end of sentence
      tl.to("#hand", { duration: 0.25, x: 1022.7, y: 488.51, ease: ease2 });
      tl.to("#dot4", { duration: 0.15, autoAlpha: 1 });
      // move hand out of the way
      tl.to("#hand", { duration: 0.75, x: 1300, y: 675, ease: ease2 });
      // move to beginning and fade out text for a seamless loop
      tl.add("ending", "+=1");
      tl.to(
        "#hand",
        { duration: 1, x: 236.07, y: 153.69, ease: ease2 },
        "ending"
      );
      tl.to(
        ".theWords path, .theWords ellipse",
        { duration: 0.75, autoAlpha: 0 },
        "ending"
      );

      // resize and center SVG demo and controls
      function sizeAll() {
        let h = window.innerHeight;
        let w = window.innerWidth;

        if (w > (h - 250) * 2) {
          gsap.set(demo, { height: h - 240, width: (h - 250) * 2 });
          gsap.set(controls, { y: h - 240 });
        } else {
          gsap.set(demo, { y: 0, width: w - 10, height: w / 2 });
          gsap.set(controls, { y: w / 2 + 10 });
        }
      }

      window.addEventListener("resize", sizeAll);
      sizeAll();
    }, 2000);
  }, []);

  return (
    <div>
      {/* HandWriting */}
      {/* <img src={HwSvg} alt="" /> */}
      <HwSvg />
    </div>
  );
};

export default Handwriting;
