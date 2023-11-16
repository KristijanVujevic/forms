import React from "react";

const IspisImena = ({ names }) => {
  return (
    <div>
      <ul>
        {names.map((name) => (
          <li
            style={{
              listStyle: "none",
              fontFamily: "Georgia,serif",
              margin: "5px",
            }}
            key={crypto.randomUUID}
          >
            Name: {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IspisImena;
