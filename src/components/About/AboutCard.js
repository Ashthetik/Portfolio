import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tejas Banait </span>
            from <span className="purple"> Pune, India. 📍</span>
            <br />
            <br /> I am a final year student pursuing an Master in Computer Application from VidyaBharti Mahavidyalaya Amravati.
            <br />
           
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football Matches
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building digital solutions with code.!"{" "}
          </p>
          <footer className="blockquote-footer">Tejas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
