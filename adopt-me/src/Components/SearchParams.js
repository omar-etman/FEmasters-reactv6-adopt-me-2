import React from "react";
import { useState, useEffect, useContext } from "react";
import ThemeContext from './ThemeContext'
import Results from "./Results";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal)
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(()=>{
    requestPets();
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets(){
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    console.log(json);
    setPets(json.pets);

  }


  
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
      <form 
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          location
          <input
            onCut={console.log}
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
          breed
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
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="darkblue">Dark blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="peru">Peru</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>

        </label>
        <button style={ {backgroundColor: theme} }>Submit</button>
      </form>
        <Results pets={pets}/>
    </div>
  );
};

export default SearchParams;
