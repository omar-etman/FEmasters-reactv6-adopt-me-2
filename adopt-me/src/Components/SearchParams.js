import React from "react";
import { useState, useEffect } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal)

  useEffect(()=>{
    requestPets();
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(()=>{
    const timer = setTimeout(() => alert('hi'), 3000);
    return () => clearTimeout(timer);
  },[animal])

  

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

        <button>Submit</button>
      </form>
        <Results pets={pets}/>
    </div>
  );
};

export default SearchParams;
