import React from "react";

import "./styles.css";

function Breadcrumb({ children, className = "" }) {
  return (
    <>
      <nav className={className}>
        <div className="nav-wrapper">
          <div className="col s12 background-breadcrumb">{children}</div>
        </div>
      </nav>
    </>
  );
}

export default Breadcrumb;
