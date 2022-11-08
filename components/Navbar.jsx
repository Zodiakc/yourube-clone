import React from "react";
import { NavbarData } from "../data/NavbarData";
import styles from "../styles/Navbar.module.css";
import NavItem from "./NavItem";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {NavbarData.map((item) => (
        <Link href={item.path}  style={{textDecoration: "none"}}>
          <NavItem key={item.id} icon={item.icon} text={item.text}  />
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
