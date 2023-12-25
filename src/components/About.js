//import React, { useState } from "react";

export default function About(props) {
  //const [myStyle, setMyStyle] = useState({
  //color: "black",
  // backgroundColor: "white",

  return (
    <div className="container mt-4">
      <h2 style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        About TextUtils
      </h2>
      <p style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        TextUtils is a React-based project aimed at providing useful tools for
        text processing and manipulation. Whether you need to format text, count
        words, or perform other text-related tasks, TextUtils has you covered.
      </p>
      <h3 style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        Our Mission
      </h3>
      <p style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        Our mission is to make text manipulation easy and accessible. We believe
        that efficient text processing tools can enhance productivity and
        creativity in various fields.
      </p>
      <h3 style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        The Team
      </h3>
      <p style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        TextUtils is developed and maintained by a passionate team of developers
        dedicated to delivering high-quality software solutions.
      </p>
    </div>
  );
}
