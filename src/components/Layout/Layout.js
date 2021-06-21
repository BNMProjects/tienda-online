import React from "react";
import PropTypes from "prop-types";

import Header from "../Global/Header/index";
import Footer from "../Global/Footer/index";
import Navbar from "../Global/Navbar/index";

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
