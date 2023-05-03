import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import team1 from "../assets/images/png/team1.png";
import team2 from "../assets/images/png/team2.png";
import team3 from "../assets/images/png/team3.png";
const Team = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className=" avatar">
              {" "}
              <img className=" w-100 " src={team3} alt="team3" />
            </div>
          </Col>
          <Col>
            <div className=" avatar">
              {" "}
              <img className=" w-100 " src={team2} alt="team2" />
            </div>
          </Col>{" "}
          <Col>
            <div className=" avatar">
              {" "}
              <img className=" w-100 " src={team1} alt="team1" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Team;
