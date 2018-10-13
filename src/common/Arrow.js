import React from "react";

export const Arrow = props => {
  return (
    <svg
      style={{
        transform: `rotate(${props.rotate}deg)`,
        width: "36px",
        position: "absolute",

        top: "3px",
        right: "0",

        fill: "white"
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 476.213 476.213"
    >
      <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607" />
    </svg>
  );
};
