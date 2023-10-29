import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashey XiR </span>
            from <span className="purple"> Australia. 📍</span>
            <br />
            <br /> I'm a Security, Network, AI, and Software Enthusiast
            <br />
           
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Tattoo Artistry/Body Art
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building digital solutions with code.!"{" "}
          </p>
          <footer className="blockquote-footer">Ashley</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
