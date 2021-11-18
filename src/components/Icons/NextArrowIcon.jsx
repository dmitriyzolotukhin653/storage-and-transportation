import React from "react";

const NextArrowIcon = ({ fill = "#fff", width = "27", height = "35" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0V20L15 10L0 0Z" fill={fill} />
    </svg>
  );
};

export default NextArrowIcon;
