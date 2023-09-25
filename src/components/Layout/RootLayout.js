/* eslint-disable react/jsx-no-undef */
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="pt-0 px-24 min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
