import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
`;

export default function SearchForm(props) {
  return (
    <SearchBar>
      <input
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={props.onChange}
      />
    </SearchBar>
  );
}
