import { Container } from "react-bootstrap";
import NavBar from "../Navbar/NavBar";
import styles from "./StartingPageContent.module.css";
import React from "react";
import { $CombinedState } from "redux";

const StartingPageContent = () => {
  return (
    <>
      <NavBar />
      <Container className="vh-100 vw-100">
        <div className={styles.container}>
          <h1 className={styles.content}>Welcome on Board</h1>
          <h3 className={styles.content}>
            dummy para dummy para dummy paradummy para dummy paradummy para
            dummy para
          </h3>
          <a href="/" className={`${styles["content"]} ${styles["button"]}`}>
            Sign-In
          </a>
        </div>
      </Container>
    </>
  );
};

export default StartingPageContent;
