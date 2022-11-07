import React from "react";
import Image from "next/image";

const NavItem = (props) => {
  return (
    <div
      className=""
      style={{ display: "flex", alignItems: "center", gap: 30, cursor:"pointer"}}
    >
      <Image src={props.icon} width="25" height="25"></Image>
      <p style={{ color: "#fff" }}>{props.text}</p>
    </div>
  );
};

export default NavItem;
