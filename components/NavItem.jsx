import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
const NavItem = (props) => {
  return (
    <div className={styles.navItem}>
      <Image src={props.icon} width="25" height="25"></Image>
      <p style={{ color: "#fff" }}>{props.text}</p>
    </div>
  );
};

export default NavItem;
