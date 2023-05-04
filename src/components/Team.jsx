import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import team1 from "../assets/images/png/team1.png";
import team2 from "../assets/images/png/team2.png";
import team3 from "../assets/images/png/team3.png";
const Team = () => {
  return (
    <section className="pb-5 mb-5">
      <div className="text-center mb-5">
        <span className=" ff_highspeed fw-normal fs_5xl clr_white team ">
          TEAM
        </span>
      </div>
      <Container>
        <Row className=" justify-content-center  justify-content-lg-between">
          <Col sm={6} lg={4}>
            <div className=" avatar2 position-relative">
              {" "}
              <img className=" w-100 border_r_20 " src={team3} alt="team3" />
              <div className="text-center position-absolute text_pos_teaam_sec">
                <p className=" ff_highspeed fw-normal fs_xl clr_white mb-0">
                  JOHHN DOE
                </p>
                <p className="  ff_magra fw-normal fs_md clr_white mb-0">
                  (Co-founder & Designer)
                </p>
              </div>
            </div>
          </Col>
          <Col sm={6} lg={4} className="mt-4 mt-sm-0">
            <div className=" avatar2 position-relative">
              {" "}
              <img
                className=" w-100 border_r_20 "
                src={team1}
                alt="team2"
              />{" "}
              <div className="text-center position-absolute text_pos_teaam_sec">
                <p className=" ff_highspeed fw-normal fs_xl clr_white mb-0">
                  JOHHN DOE
                </p>
                <p className="  ff_magra fw-normal fs_md clr_white mb-0">
                  (Co-founder & Designer)
                </p>
              </div>
            </div>
          </Col>{" "}
          <Col sm={6} lg={4} className="mt-4 mt-lg-0">
            <div className=" avatar2 position-relative">
              {" "}
              <img
                className=" w-100 border_r_20 "
                src={team2}
                alt="team1"
              />{" "}
              <div className="text-center position-absolute text_pos_teaam_sec">
                <p className=" ff_highspeed fw-normal fs_xl clr_white mb-0">
                  JOHHN DOE
                </p>
                <p className="  ff_magra fw-normal fs_md clr_white mb-0">
                  (Co-founder & Designer)
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Team;
