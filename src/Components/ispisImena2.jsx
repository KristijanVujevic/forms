import React from "react";

const IspisImena2 = ({ useri, genderStyle }) => {
  return (
    <div>
      {useri.length > 0 ? (
        <ul>
          {useri.map((user) => (
            <li
              className={genderStyle}
              style={{
                listStyle: "none",
                fontFamily: "Georgia,serif",
                margin: "5px",
              }}
              key={crypto.randomUUID()}
            >
              <p>Name: {user.name}</p>
              <p>Gender: {user.gender}</p>
              <p>Email: {user.email}</p>
              <p>Password: {user.password}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
    </div>
  );
};

export default IspisImena2;
