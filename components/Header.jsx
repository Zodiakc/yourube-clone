import React from "react";
import Image from "next/image";
import SearchInput from "./SearchInput";
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        <Image src="/burger.svg" width="24" height="24" className={styles.burgerIcon}></Image>
        <Image src="/youtube.png" width="100" height="70" style={{objectFit: "cover"}}></Image>
      </div>

      <SearchInput />
      <div className={styles.profileBlock}>
        <Image
          src="/notice.svg"
          width="24"
          height="24"
          className={styles.noticeIcon}
        ></Image>
        <Image
          src="/profile.svg"
          width="40"
          height="40"
          className={styles.profileIcon}
        ></Image>
      </div>
    </header>
  );
};

export default Header;
