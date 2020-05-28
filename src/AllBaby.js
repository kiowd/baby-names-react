import React, { useState } from "react";
import "./styles.css";

import Search from "./Search";
import Favourites from "./Favourites";

const AllBaby = ({ data }) => {
  const [search, setSearch] = useState("");
  const [state, setState] = useState(data);

  const handleChange = e => {
    setSearch(e.target.value);
    const lady = e.target.value;
    setState(
      data.filter(person =>
        person.name.toLowerCase().includes(lady.toLowerCase())
      )
    );
  };

  // const results = !search
  //   ? data
  //   : data.filter(person =>
  //       person.name.toLowerCase().includes(search.toLowerCase())
  //     );

  data.sort(function(a, b) {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });

  const handleClick = e => {
    console.log("you clicked blue");
    setState(data.filter(person => person.sex === "m"));
  };

  const handleClickPink = e => {
    console.log("you clicked pink");
    setState(data.filter(person => person.sex === "f"));
  };

  const handleClickBoth = e => {
    console.log("you clicked pink");
    setState(data);
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
