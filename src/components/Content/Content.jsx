import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Content.css";

const Content = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Content;
