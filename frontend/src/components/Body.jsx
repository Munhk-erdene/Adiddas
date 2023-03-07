import React from "react";
import BodyImage from "./body-components/BodyImage";
import BodyNavbar from "./body-components/BodyNavbar";
import BodyTitle from "./body-components/BodyTitle";
import ItemNavbar from "./ItemNavbar";

const Body = () => {
  return (
    <div
      style={{ width: "100vw", height: "4000px", border: "1px solid black" }}
    >
      <BodyImage />
      <div style={{ marginTop: "100px" }}>
        <ItemNavbar />
      </div>
      <BodyTitle />
      <div style={{ marginTop: "40px" }}>
        <BodyNavbar />
      </div>
    </div>
  );
};

export default Body;
