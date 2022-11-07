import React from "react";
import { NavbarData } from "../data/NavbarData";
import styles from "../styles/Navbar.module.css"
import NavItem from "./NavItem";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {NavbarData.map((item) => (
        <NavItem key={item.id} icon={item.icon} text={item.text}/>
    ))}
    </nav>
  );
};

export default Navbar;
