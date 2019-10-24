import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard.js";
// import SearchForm from "./SearchForm.js";
import WelcomePage from "./WelcomePage";

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`).then(response => {
      console.log(response);
      setCharacter(response.data.results);
    });
  }, []);

  ///////////// Search Form
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = character.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <section className="character-list">
        <SearchBar>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </SearchBar>
        <Cards>
          {searchResults.map(char => {
            return (
              <CharacterCard
                key={char.id}
                img={char.image}
                name={char.name}
                gender={char.gender}
                species={char.species}
                status={char.status}
              />
            );
          })}
        </Cards>
      </section>
    </div>
  );
}
