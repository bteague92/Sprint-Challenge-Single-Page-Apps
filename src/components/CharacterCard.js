import React from "react";
import styled from "styled-components";

const IndiCard = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  padding: 1%;
  margin: 2%;
`;

export default function CharacterCard(props) {
  return (
    <IndiCard>
      <h2>{props.name}</h2>
      <img src={props.img}></img>
      <h3>Species: {props.species}</h3>
      <h3>Gender: {props.gender}</h3>
      <h3>Status: {props.status}</h3>
    </IndiCard>
  );
}
