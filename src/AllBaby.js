import React, { useState } from "react";
import "./styles.css";

import Search from "./Search";
import Favourites from "./Favourites";

const AllBaby = ({ data }) => {
  const [search, setSearch] = useState("");
  const [state, setState] = useState(data);
  const [gender, setGender] = useState("both");

  const handleChange = e => {
    setSearch(e.target.value);
    const compare = e.target.value;
    setState(
      gender === "both"
        ? data.filter(person =>
            person.name.toLowerCase().includes(compare.toLowerCase())
          )
        : data
            .filter(person => person.sex === gender)
            .filter(person =>
              person.name.toLowerCase().includes(compare.toLowerCase())
            )
    );
  };

  
  data.sort(function(a, b) {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });

  const handleClick = e => {
    console.log("you clicked blue");
    setState(data.filter(person => person.sex === "m"));
    setGender("m");
  };

  const handleClickPink = e => {
    console.log("you clicked pink");
    setState(data.filter(person => person.sex === "f"));
    setGender("f");
  };

  const handleClickBoth = e => {
    console.log("you clicked both");
    setState(data);
    setGender("both");
  };

  return (
    <React.Fragment>
      <Search
        value={search}
        handleChange={handleChange}
        handleClick={handleClick}
        handleClickPink={handleClickPink}
        handleClickBoth={handleClickBoth}
      />
      <Favourites />
      <div className="container">
        {state.map((el, i) => {
          return el.sex === "m" ? (
            <button type="button" className="btn btn-blue" key={i}>
              {el.name}
            </button>
          ) : (
            <button type="button" className="btn btn-pink" key={i}>
              {el.name}
            </button>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default AllBaby;
