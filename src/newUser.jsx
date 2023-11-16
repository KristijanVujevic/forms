import React, { useState } from "react";

import IspisImena2 from "./Components/ispisImena2";

const NewUser = () => {
  const users = [];
  const cardStyle = {
    borderRadius: 8,
    border: "1px solid black",
    boxSizing: "border-box",
    margin: 24,
    padding: 24,
    boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)",
    width: 400,
    color: "darkred",
    fontWeight: "bold",
  };
  const fonts = {
    fontFamily: "Open Sans",
    fontSize: "40px",
    boxShadow: "0 1 10px black",
    color: "cyan",
  };

  const [useri, setUseri] = useState(users);
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("style1");
  const [selectedGenderStyle, setSelectedGenderStyle] = useState("male");

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
  };
  const handleGenderChange = (gender) => {
    const genderStyle = gender === "male" ? "male-style" : "female-style";
    setSelectedGenderStyle(genderStyle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUseri([...useri, { name: fullName, gender, email, password }]);
    setFullName("");
    setGender("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className={`app-container ${selectedStyle}`}>
        <h1>Choose your destiny!</h1>
        <p>Choose a style:</p>

        <div>
          <button onClick={() => handleStyleChange("style1")}>Not this</button>
          <button onClick={() => handleStyleChange("style2")}>
            This is worse
          </button>
          <button onClick={() => handleStyleChange("style3")}>Yuck!</button>
        </div>

        <p>Selected Style: {selectedStyle}</p>
      </div>
      <form style={cardStyle} onSubmit={handleSubmit}>
        <label style={fonts}>
          Name:
          <input
            autoFocus
            name="fullName"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </label>
        <label>
          Gender:
          <select
            onChange={(e) => {
              setGender(e.target.value);
              handleGenderChange(e.target.value);
            }}
            value={gender}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <IspisImena2 useri={useri} genderStyle={selectedGenderStyle} />
    </div>
  );
};

export default NewUser;
