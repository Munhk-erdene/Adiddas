import React from "react";
// import { instance } from "../App";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from "../components/Body";
import HeaderBlack from "../components/HeaderBlack";
function HomeLogged() {
  // const params = useParams();
  // const [value, setValue] = useState([]);
  // const getUsername = async () => {
  //   const res = await instance.get(`/customers/${params.userid}`);
  //   setValue(res.data.data);
  //   console.log("");
  // };
  // useEffect(() => {
  //   getUsername();
  // }, []);
  return (
    <div>
      <HeaderBlack />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default HomeLogged;
