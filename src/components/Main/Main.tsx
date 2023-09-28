import { useState } from "react";
import "./style.scss";

const Main = () => {
  let [activeNavTitle, setActiveNavTitle] =
    useState<string>("Application Form");

  let navTitles = [
    "Program Details",
    "Application Form",
    "Workflow",
    "Preview",
  ];

  return (
    <div className="main">
      <div className="nav">
        <div className="nav-content">
          {navTitles.map((title) => (
            <div
              className={`nav-title ${
                title === activeNavTitle ? "active" : ""
              }`}
              onClick={()=>setActiveNavTitle(title)}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
