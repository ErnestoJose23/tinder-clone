import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./FireBase";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data))
      );
  }, [people]);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
              <h3>{person.distance}Km</h3>
              <h4>{person.description}</h4>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="tinderCards__cardContainer cardCentered">
        No hay nadie nuevo cerca de ti.
      </div>
    </div>
  );
}

export default TinderCards;
