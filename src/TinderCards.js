import React, { useState } from "react";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Steve jobs",
      url:
        "https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
    },
    {
      name: "mark zuvkerberg",
      url:
        "https://imagenes.iberoeconomia.es/wp-content/uploads/2020/08/08234200/Mark-Zuckerberg-Surfing.jpg",
    },
  ]);
  return (
    <div>
      <h1>Tinder cards</h1>
      {people.map((person) => (
        <TinderCard>
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
