import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import q1 from "../assets/images/img/q1.png";
import q1i1 from "../assets/images/img/q1i1.png";
import q1i2 from "../assets/images/img/q1i2.png";
import q1i3 from "../assets/images/img/q1i3.png";
import q3i1 from "../assets/images/img/q3i1.png";
import q2i2 from "../assets/images/img/q3i2.png";
import q3i3 from "../assets/images/img/q3i3.png";
import arrow from "../assets/images/img/triangle.png";
import line from "../assets/images/img/line.png";
const RoadmapSec = () => {
  return (
    <section className="bg_roadmap pb-5  mb-5 ">
      <Container>
        <div className="text-center mb-3">
          <span className=" ff_highspeed fw-normal fs_5xl clr_white roadmap ">
            ROADMAP
          </span>
        </div>
        {/* q1 */}
        <Row className=" position-relative">
          <Col lg={2} className="mb-4 mb-lg-0">
            <div className="q1 d-flex justify-content-center align-items-center">
              <span className=" ff_highspeed fw-normal fs_6xl clr_white traform_minus_90_deg">
                Q1
              </span>
            </div>
          </Col>
          <Col lg={10}>
            <Row className=" justify-content-between">
              <Col lg={3} className="">
                <div className=" d-flex flex-lg-column align-items-start align-items-lg-center">
                  <div className="z_4 position-relative text-center">
                    <img src={q1i1} alt="" className="max_w_84" />
                    <img
                      src={arrow}
                      alt="arrow"
                      className=" position-absolute arrow_roadmap_pos start_50 translate-middle_x"
                    />
                  </div>
                  <div className="mt-4 mt-lg-5 ms-4 ms-sm-5 ms-lg-0">
                    <p className=" ff_highspeed fw-normal fs_3xl clr_white text-lg-center ">
                      MONTH 1
                    </p>
                    <ul className="mb-0 ps-0">
                      <li className=" ff_magra fw-normal fs_lg clr_white white_crcle position-relative">
                        Funding from initial mint put into Autonomous trading
                        strategy to build funds for the next year.
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        Create Hangout for Community Voting to commence
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        First Community Vote: Shortlisting an Artist
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="">
                <div className=" d-flex flex-lg-column align-items-start align-items-lg-center ">
                  <div className="z_4 position-relative text-center">
                    <img src={q1i2} alt="" className="max_w_84" />
                    <img
                      src={arrow}
                      alt="arrow"
                      className=" position-absolute arrow_roadmap_pos start_50 translate-middle_x"
                    />
                  </div>
                  <div className="mt-4 mt-lg-5 ms-4 ms-sm-5 ms-lg-0">
                    <p className=" ff_highspeed fw-normal fs_3xl clr_white text-lg-center ">
                      MONTH 2
                    </p>
                    <ul className="mb-0 ps-0">
                      <li className=" ff_magra fw-normal fs_lg clr_white white_crcle position-relative">
                        First Community Vote: Shortlisting an Artist Ends
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        Reach out to said Artists to short list them.
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        Second Community Vote: Choose Artist
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="">
                <div className=" d-flex flex-lg-column align-items-start align-items-lg-center">
                  <div className="z_4 position-relative text-center">
                    <img src={q1i3} alt="" className="max_w_84" />
                    <img
                      src={arrow}
                      alt="arrow"
                      className=" position-absolute arrow_roadmap_pos start_50 translate-middle_x"
                    />
                  </div>
                  <div className="mt-4 mt-lg-5 ms-4 ms-sm-5 ms-lg-0">
                    <p className=" ff_highspeed fw-normal fs_3xl clr_white text-lg-center ">
                      MONTH 3
                    </p>
                    <ul className="mb-0 ps-0">
                      <li className=" ff_magra fw-normal fs_lg clr_white white_crcle position-relative">
                        Second Community Vote Ends
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        Connect with Chosen Artist
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        First "Meme" NFT project is launched to fund
                        marketplace.
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <img
            src={line}
            alt=""
            className=" position-absolute line_pos w-100 max_w_94 d-none d-lg-block"
          />
        </Row>
        {/* q2 */}
        <Row className=" position-relative mt-5">
          <Col lg={2} className="mb-4 mb-lg-0">
            <div className="q1 d-flex justify-content-center align-items-center">
              <span className=" ff_highspeed fw-normal fs_6xl clr_white traform_minus_90_deg">
                Q2
              </span>
            </div>
          </Col>
          <Col lg={10}>
            <Row className=" justify-content-between">
              <Col lg={3} className="">
                <div className=" d-flex flex-lg-column align-items-start align-items-lg-center">
                  <div className="z_4 position-relative text-center">
                    <img src={q1i1} alt="" className="max_w_84" />
                    <img
                      src={arrow}
                      alt="arrow"
                      className=" position-absolute arrow_roadmap_pos start_50 translate-middle_x"
                    />
                  </div>
                  <div className="mt-4 mt-lg-5 ms-4 ms-sm-5 ms-lg-0">
                    <p className=" ff_highspeed fw-normal fs_3xl clr_white text-lg-center ">
                      MONTH 4
                    </p>
                    <ul className="mb-0 ps-0">
                      <li className=" ff_magra fw-normal fs_lg clr_white white_crcle position-relative">
                        Artist Provides Samples to be Voted on
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        Market Place Dev Announcement
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        Begin Construction of secondary Market
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        Third Community Vote, Choosing the Art
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="">
                <div className=" d-flex flex-lg-column align-items-start align-items-lg-center ">
                  <div className="z_4 position-relative text-center">
                    <img src={q1i2} alt="" className="max_w_84" />
                    <img
                      src={arrow}
                      alt="arrow"
                      className=" position-absolute arrow_roadmap_pos start_50 translate-middle_x"
                    />
                  </div>
                  <div className="mt-4 mt-lg-5 ms-4 ms-sm-5 ms-lg-0">
                    <p className=" ff_highspeed fw-normal fs_3xl clr_white text-lg-center ">
                      MONTH 5
                    </p>
                    <ul className="mb-0 ps-0">
                      <li className=" ff_magra fw-normal fs_lg clr_white white_crcle position-relative">
                        Third Community Vote, Choosing the Art Ends
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        Artist begins working on official DAO/PFP NFT
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        Marketplace Testing
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="">
                <div className=" d-flex flex-lg-column align-items-start align-items-lg-center">
                  <div className="z_4 position-relative text-center">
                    <img src={q1i3} alt="" className="max_w_84" />
                    <img
                      src={arrow}
                      alt="arrow"
                      className=" position-absolute arrow_roadmap_pos start_50 translate-middle_x"
                    />
                  </div>
                  <div className="mt-4 mt-lg-5 ms-4 ms-sm-5 ms-lg-0">
                    <p className=" ff_highspeed fw-normal fs_3xl clr_white text-lg-center ">
                      MONTH 6
                    </p>
                    <ul className="mb-0 ps-0">
                      <li className=" ff_magra fw-normal fs_lg clr_white white_crcle position-relative">
                        Launch of NFT Marketplace
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        6 Month Autonomous bot report to holders with proof of
                        return
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        Expected Mint for DAO/PFP NFT
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <img
            src={line}
            alt=""
            className=" position-absolute line_pos w-100 max_w_94 d-none d-lg-block"
          />
        </Row>
        {/* q3 */}
        <Row className=" position-relative mt-5">
          <Col lg={2} className="mb-4 mb-lg-0">
            <div className="q1 d-flex justify-content-center align-items-center">
              <span className=" ff_highspeed fw-normal fs_6xl clr_white traform_minus_90_deg">
                Q3
              </span>
            </div>
          </Col>
          <Col lg={10}>
            <Row className=" justify-content-between">
              <Col lg={3} className="">
                <div className=" d-flex flex-lg-column align-items-start align-items-lg-center">
                  <div className="z_4 position-relative text-center">
                    <img src={q3i1} alt="" className="max_w_84" />
                    <img
                      src={arrow}
                      alt="arrow"
                      className=" position-absolute arrow_roadmap_pos start_50 translate-middle_x"
                    />
                  </div>
                  <div className="mt-4 mt-lg-5 ms-4 ms-sm-5 ms-lg-0">
                    <p className=" ff_highspeed fw-normal fs_3xl clr_white text-lg-center ">
                      MONTH 7
                    </p>
                    <ul className="mb-0 ps-0">
                      <li className=" ff_magra fw-normal fs_lg clr_white white_crcle position-relative">
                        Community Vote on Gen 2 NFT that offers Tokenomics
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        Artist Commences work
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="">
                <div className=" d-flex flex-lg-column align-items-start align-items-lg-center ">
                  <div className="z_4 position-relative text-center">
                    <img src={q2i2} alt="" className="max_w_84" />
                    <img
                      src={arrow}
                      alt="arrow"
                      className=" position-absolute arrow_roadmap_pos start_50 translate-middle_x"
                    />
                  </div>
                  <div className="mt-4 mt-lg-5 ms-4 ms-sm-5 ms-lg-0">
                    <p className=" ff_highspeed fw-normal fs_3xl clr_white text-lg-center ">
                      MONTH 8
                    </p>
                    <ul className="mb-0 ps-0">
                      <li className=" ff_magra fw-normal fs_lg clr_white white_crcle position-relative">
                        Community Vote on Defi Developments
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        Announcement on Token release
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="">
                <div className=" d-flex flex-lg-column align-items-start align-items-lg-center">
                  <div className="z_4 position-relative text-center">
                    <img src={q3i3} alt="" className="max_w_84" />
                    <img
                      src={arrow}
                      alt="arrow"
                      className=" position-absolute arrow_roadmap_pos start_50 translate-middle_x"
                    />
                  </div>
                  <div className="mt-4 mt-lg-5 ms-4 ms-sm-5 ms-lg-0">
                    <p className=" ff_highspeed fw-normal fs_3xl clr_white text-lg-center ">
                      MONTH 9
                    </p>
                    <ul className="mb-0 ps-0">
                      <li className=" ff_magra fw-normal fs_lg clr_white white_crcle position-relative">
                        Comunity Vote on name of Token
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        Preview of Gen 2 Art Released across media
                      </li>
                      <li className=" ff_magra fw-normal fs_lg clr_white mt-1 white_crcle position-relative">
                        Dev Chosen to work alongside team focusing on Defi
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <img
            src={line}
            alt=""
            className=" position-absolute line_pos w-100 max_w_94 d-none d-lg-block"
          />
        </Row>
      </Container>
    </section>
  );
};

export default RoadmapSec;
