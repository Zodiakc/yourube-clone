import React from "react";
import Image from "next/image";
import styles from "../styles/Search.module.css";
const SearchInput = () => {
  return (
    <div className={styles.searchInput}>
      <input
        type="text"
        placeholder="Введите запрос"
        className={styles.searchInputItem}
      />
      <div className={styles.searchButton}>
        <Image src="/search.svg" width="20" height="20" alt="image"></Image>
      </div>
    </div>
  );
};

export default SearchInput;
