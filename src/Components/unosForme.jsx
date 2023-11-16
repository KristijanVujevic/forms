import React, { useState } from "react";
import IspisImena from "./ispisImena";

const UnosForme = () => {
  const initialNames = ["Ante", "Mate", "Marija", "Jure"];
  const [names, setNames] = useState(initialNames);
  const [ime, setIme] = useState("");

  const handleAddStudent = (e) => {
    e.preventDefault();

    setNames([...names, ime]);
    setIme("");
  };

  return (
    <div>
      <form onSubmit={handleAddStudent}>
        <label>
          Ime:
          <input
            autoFocus
            name="name"
            onChange={(e) => setIme(e.target.value)}
            value={ime}
          />
        </label>
        <input type="submit" value="Potvrdi" />
      </form>
      <IspisImena names={names} />
    </div>
  );
};

export default UnosForme;
