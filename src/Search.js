import React from "react";
import "./styles.css";

const Search = ({
  value,
  handleChange,
  handleClick,
  handleClickPink,
  handleClickBoth
}) => {
  return (
    <div className="searchInput">
      <input
        type="text"
        placeholder="Search.."
        className="searchTerm"
        value={value}
        onChange={handleChange}
      />
      <button
        className="square square-blue"
        onClick={handleClick}
        value={value}
      />
      <button
        className=" square square-pink"
        onClick={handleClickPink}
        value={value}
      />
      <button className=" square-pink-and-blue" onClick={handleClickBoth} />
    </div>
  );
};

export default Search;
