import React from "react";
import { IconContext } from "react-icons";
import { FaMaxcdn } from "react-icons/fa";
import { DiRedhat } from "react-icons/di";

function Icons() {
  return (
    <IconContext.Provider value={{ color: "red", size: "10rem" }}>
      <div>
        <h2>Icons</h2>
        <FaMaxcdn color="blue" size="12rem" />
        <DiRedhat />
      </div>
    </IconContext.Provider>
  );
}

export default Icons;
