import React from "react";

const ArrowIcon = ({ color = "white", strokeWidth = 1.4 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none">
    <path
      d="M6 9.5L12 15.5L18 9.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowIcon;
