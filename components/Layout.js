import React from 'react';
import { Children } from 'react/cjs/react.production.min';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({children}) => {
  return <>
      <Navbar/>
      {children}
      <Footer/>
  </>;
};

export default Layout;
