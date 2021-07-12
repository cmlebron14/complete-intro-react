import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const breeds = [];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          value={location}
        />
        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value={animal}
          onBlur={(e) => setAnimal(e.target.value)}
          onChange={(e) => setAnimal(e.target.value)}
        >
          <option value=""></option>
          {ANIMALS.map((animal) => (
            <option value={animal} key={animal}>
              {animal}
            </option>
          ))}
        </select>
        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          value={breed}
          onBlur={(e) => setBreed(e.target.value)}
          onChange={(e) => setBreed(e.target.value)}
        >
          <option value=""></option>
          {breeds.map((breed) => (
            <option value={breed} key={breed}>
              {breed}
            </option>
          ))}
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
