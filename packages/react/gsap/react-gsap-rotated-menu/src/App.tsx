import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import { styled } from "styled-components";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Project from "./components/Project";
import Cursor from "./components/Cursor";

type Props = {};

const StyledMainWrapper = styled.div`
  position: relative;
`;

const App = (props: Props) => {
  const circleRef = useRef<any>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    circleRef.current.moveTo(window.innerWidth / 2, window.innerHeight / 2);
    const onMove = ({ clientX, clientY }: any) => {
      circleRef.current.moveTo(clientX, clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <StyledMainWrapper>
      <Cursor ref={circleRef} />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Content />
      <Project />
      <Menu isMenuOpen={isMenuOpen} />
    </StyledMainWrapper>
  );
};

export default App;
