import React from "react";

import Title from "../Title";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Title title="Storage and Transportation" />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
