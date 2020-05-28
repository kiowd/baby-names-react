import React from "react";
import "./styles.css";

import AllBaby from "./AllBaby";

import data from "./babyNameData.json";
// import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1 className="babyTitle">Baby Name Picker (React)</h1>
      {/* <Search data={data} /> */}
      <AllBaby data={data} />
    </div>
  );
}
