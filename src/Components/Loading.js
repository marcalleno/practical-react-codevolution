import React from "react";
import { css } from "@emotion/react";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";

const loaderCSS = css`
  margin-top: 25px;
  margin-bottom: 25px;
`;

function Loading() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Loading component</h2>
      <BounceLoader css={loaderCSS} size={24} color="red" loading />
      <BarLoader css={loaderCSS} size={48} color="orange" loading />
      <BeatLoader css={loaderCSS} size={72} color="maroon" loading />
    </div>
  );
}

export default Loading;
