import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [menuState, setMenuState] = useState(false);
  const toggleNav = () => {
    setMenuState(!menuState);
  };
  return (
    <div>
      <Header toggleNav={toggleNav} />
      <div style={{ display: "flex" }}>
        <Navbar menuState={menuState} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
