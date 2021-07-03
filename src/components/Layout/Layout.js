import React from "react";
import PropTypes from "prop-types";

import Header from "../Header/Main/index";
import Navbar from "../Navbar/Main/index";
import MainMenu from "../Menu/Main/index";
import Footer from "../Footer/Main/index";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <MainMenu />
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
