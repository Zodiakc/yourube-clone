import React from "react";
import Image from "next/image";
import SearchInput from "./SearchInput";
import styles from "../styles/Header.module.css";
import { useState } from "react";
const Header = ({ toggleNav }) => {
  const [noticeModal, setNoticeModal] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        <Image
          src="/burger.svg"
          width="24"
          height="24"
          alt="image"
          className={styles.burgerIcon}
          onClick={() => toggleNav()}
        ></Image>
        <Image
          src="/youtube.png"
          alt="image"
          width="100"
          height="70"
          style={{ objectFit: "cover" }}
          className={styles.youtubeLogo}
        ></Image>
      </div>

      <SearchInput />
      <div className={styles.profileBlock}>
        <Image
          src="/notice.svg"
          width="24"
          height="24"
          className={styles.noticeIcon}
          alt="image"
          onClick={() => setNoticeModal(!noticeModal)}
        ></Image>
        <Image
          alt="image"
          src="/profile.svg"
          width="40"
          height="40"
          className={styles.profileIcon}
        ></Image>
      </div>
      {noticeModal && (
        <div className={styles.noticeModal}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 25px",
            }}
          >
            <h3>Уведомления</h3>
            <Image src="/gear.svg" width="25" height="25" alt="image"></Image>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
