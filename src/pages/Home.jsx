// src/pages/Home.jsx
import React from "react";
import ScrollButton from "../components/ScrollButton";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

export default function Home() {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#264653",
        }}
      >
        <img
          src="https://via.placeholder.com/150"
          alt="Citrouille"
          style={{ marginBottom: "20px" }}
        />
        <ScrollButton target="section1" label="Commencer l'enquête" />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
