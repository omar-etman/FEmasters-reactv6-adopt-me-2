import React from "react";
import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];
  
  const updateLocation = (e) => {
    setLocation(e.target.value);
  };

  const updateAnimal = (e) => {
    setAnimal(e.target.value);
  };

  const updateBreed = (e) => {
    setBreed(e.target.value);
  };

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            onChange={updateLocation}
            value={location}
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={updateAnimal}
            onBlur={updateAnimal}
            placeholder="select animal"
          >
            <option />
            {ANIMALS.map((anm) => (
              <option value={anm} key={anm}>
                {anm}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Animal
          <select
            id="breed"
            value={breed}
            onChange={updateBreed}
            onBlur={updateBreed}
          >
            <option />
            {breeds.map((brd) => (
              <option value={brd} key={brd}>
                {brd}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
