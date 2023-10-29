import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Educationcard from "./Educationcard";
import Particle from "../Particle";


function Certificate() {
  return (
    <Container fluid className="education-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Education </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="education-card">
            <Educationcard
              isBlog={false}
              college="La Trobe University"
              title="Bachelor's Cyber Security"
              description="Percentage : 2%"
            />
          </Col>

          <Col md={4} className="education-card">
            <Educationcard
              isBlog={false}
              college="RMIT University"
              title="Cert IV - Information Tech. (Networking)"
              description="Percentage : 83.5%"
            />
          </Col>

         

        </Row>
      
      </Container>
    </Container>
  );
}

export default Certificate;
