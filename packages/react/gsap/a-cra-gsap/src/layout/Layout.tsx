import React from "react";
import { Link, Outlet } from "react-router-dom";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
      share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/circle-square">Circle Square</Link>
          </li>
          <li>
            <Link to="/good-bad">Good bad</Link>
          </li>
          <li>
            <Link to="/click-square">Click Square</Link>
          </li>
          <li>
            <Link to="/remove-listener">Remove Listener</Link>
          </li>
          <li>
            <Link to="/ref-selector">Ref Selector</Link>
          </li>
          <li>
            <Link to="/box-ref">Box Ref</Link>
          </li>
          <li>
            <Link to="/box-class">Box Class</Link>
          </li>
          <li>
            <Link to="/rotate-square">Rotate Square</Link>
          </li>
          <li>
            <Link to="/rotate-move">Rotate Move</Link>
          </li>
          <li>
            <Link to="/toggle-timeline">Toggle Timeline</Link>
          </li>
          <li>
            <Link to="/delay-render">Delay Render</Link>
          </li>
          <li>
            <Link to="/end-x">End X</Link>
          </li>
          <li>
            <Link to="/revert-render">Revert Render</Link>
          </li>
          <li>
            <Link to="/quick-to">Quick To</Link>
          </li>
          <li>
            <Link to="/film">Film</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />
      {/* An <Outlet> renders whatever child route is currently active,
      so you can think about this <Outlet> as a placeholder for
      the child routes we defined above. */}
      <Outlet />
    </div>
  );
};

export default Layout;
