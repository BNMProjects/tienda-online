import React from "react";
import PropTypes from "prop-types";

import Header from "../Header/index";
import Footer from "../Footer/index";
import Navbar from "../Navbar/index";

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
