import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
// import axios from "axios";
import CharacterList from "./components/CharacterList.js";
// import LocationsList from "./components/LocationsList.js";
// import SearchForm from "./components/SearchForm.js";
import styled from "styled-components";
import WelcomePage from "./components/WelcomePage.js";
import Header from "./components/Header.js";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export default function App() {
  return (
    <main>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </Nav>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
