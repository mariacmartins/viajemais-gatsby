import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './Navbar';
import Footer from './Footer';

import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
