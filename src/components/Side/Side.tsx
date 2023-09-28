import React from "react";
import "./style.scss";
import { Icon } from "../Icon/Icon";
import { ImgIcon } from "../Icon/ImgIcon";

const Side = () => {
  return (
    <div className="side">
      <Icon name="menu" />
      <ImgIcon name="home" className="home" width="35px" />
      <ImgIcon name="note" className="note" width="33px" />
      <div className="name">NT</div>
    </div>
  );
};

export default Side;
