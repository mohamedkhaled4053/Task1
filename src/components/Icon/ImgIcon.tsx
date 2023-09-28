import React from "react";

interface props extends React.HTMLProps<HTMLImageElement> {
  name: string;
  type?: "png" | "jpg";
}

// dynamically import img by the name
export const ImgIcon: React.FC<props> = ({ name, type, ...rest }) => {
  let img;
  try {
    img = require(`../../assets/images/${name}.${type ? type : "png"}`);
  } catch (error) {
    console.log(error);
  }

  if (img) return <img src={img} alt="icon" {...rest} />;

  return null;
};
