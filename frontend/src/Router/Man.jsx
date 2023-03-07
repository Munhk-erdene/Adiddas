import Collection from "../components/Collection";
import React from "react";
import Header from "../components/Header";
import ItemNavbar from "../components/ItemNavbar";

function Man() {
  const manStyle = {
    headerImage: {
      width: "100vw",
      height: "91vh",
      border: "1px solid black",
    },
  };
  return (
    <div>
      <Header />
      <div style={manStyle.headerImage}></div>
      <ItemNavbar />
      <Collection />
    </div>
  );
}

export default Man;
