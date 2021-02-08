import React from "react";
import fondo from "../assets/error404.png";

function Error404() {
  return (
    <div
      style={{
        backgroundImage: "url(" + fondo + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    ></div>
  );
}

export default Error404;
