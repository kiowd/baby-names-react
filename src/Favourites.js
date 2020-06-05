import React from "react";
import "./styles.css";

const Favourites = ({ favourite, setFavourite, setState, state }) => {
  const removeFav = baby => {
    setFavourite(favourite.filter((el, i) => el.name !== baby.name));
    setState([...state, baby]);
  };
  return (
    <div>
      <p>
        Favourites:
        {favourite.length > 0
          ? favourite.map((el, i) => {
              return el.sex === "m" ? (
                <button
                  type="button"
                  className="btn btn-blue"
                  key={i}
                  onClick={() => removeFav(el)}
                >
                  <span
                    style={{
                      position: "relative",
                      top: -9,
                      float: "right",
                      right: -9
                    }}
                  >
                    ×
                  </span>
                  {el.name}
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-pink"
                  key={i}
                  onClick={() => removeFav(el)}
                >
                  <span
                    style={{
                      position: "relative",
                      top: -9,
                      float: "right",
                      right: -9
                    }}
                  >
                    ×
                  </span>
                  {el.name}
                </button>
              );
            })
          : favourite}
      </p>
    </div>
  );
};

export default Favourites;
