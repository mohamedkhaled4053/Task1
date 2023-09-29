import React, { useState } from "react";
import "./style.scss";

const Navbar = () => {
  let [activeNavTitle, setActiveNavTitle] =
    useState<string>("Application Form");

  let navTitles = [
    "Program Details",
    "Application Form",
    "Workflow",
    "Preview",
  ];

  return (
    <div className="nav">
      <div className="nav-content">
        {navTitles.map((title, index) => (
          <div
            key={title + index}
            className={`nav-title ${title === activeNavTitle ? "active" : ""}`}
            onClick={() => setActiveNavTitle(title)}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
