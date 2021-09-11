import React from "react";

function Pet(props) {
  const { name, animal, breed } = props;

  return (
    <div>
      <h2>{name}</h2>
      <h3>{animal}</h3>
      <h3>{breed}</h3>
    </div>
  );
}

export default Pet;