import React, { forwardRef } from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const ColorTooltip = () => {
  return <span style={{ color: "greenyellow" }}>Tooltip Berwarna</span>;
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>Baris pertama</div>
      <div>Baris kedua</div>
    </div>
  );
});

function Tooltip() {
  return (
    <>
      <h2>Tooltip Component</h2>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy
          placement="right"
          arrow={false}
          delay={1000}
          content="Contoh Tooltip"
        >
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<span style={{ color: "red" }}>Tooltip Merah</span>}>
          <button>Hover 2</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColorTooltip />}>
          <button>Hover 3</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy placement="top-end" content={<ColorTooltip />}>
          <CustomChild />
        </Tippy>
      </div>
    </>
  );
}

export default Tooltip;
