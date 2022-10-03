import { Container } from "react-bootstrap";
import NavBar from "../Navbar/NavBar";
import classes from "./StartingPageContent.module.css";
import React from "react";
const StartingPageContent = () => {
  return (
    <>
      <NavBar />
      <Container className="vh-100 vw-100">
        <div className="d-flex flex-column flex-wrap justify-content-end">
          <h1 className="pt-5 text-right">Welcome on Board</h1>
          <p>
            dummy para dummy para dummy paradummy para dummy paradummy para
            dummy para
          </p>
        </div>
      </Container>
    </>
  );
};

export default StartingPageContent;
