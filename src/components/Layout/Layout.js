import React from "react";
import PropTypes from "prop-types";

import Header from "../Global/Header/Header";
import Navbar from "../Global/Navbar/Navbar";
import Footer from "../Global/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
