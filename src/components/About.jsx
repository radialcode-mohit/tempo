import React from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";
import about_img from "../assets/images/png/aboutimg.png";
const About = () => {
  return (
    <section>
      <Container>
        <Row className=" justify-content-between flex-column-reverse mt-lg-5 pt-lg-5 flex-lg-row">
          <Col lg={6} className=" mt-sm-5">
            {" "}
            <div className=" me-xl-5 mt-sm-5 mt-4">
              <h3 className=" ff_highspeed fw-normal fs_5xl clr_white">
                About
              </h3>
              <p className=" ff_magra fw-normal fs_lg clr_white">
                Facilisi nec at ullamcorper consequat venenatis cursus sagittis.
                Aliquet venenatis, urna egestas elementum ultricies convallis
                amet. Cursus sed porta imperdiet tellus lorem nam leo.
                Sollicitudin risus suspendisse urna sed arcu sit. Ullamcorper
                diam nulla nulla enim. Mi mauris, tortor pharetra in pretium
                rhoncus. Egestas sollicitudin quis ullamcorper bibendum at amet
                vel. Pellentesque congue est parturient egestas. Viverra leo non
                tincidunt sed sed quam in. Augue justo lacus, magna at ornare
                sed.
              </p>
            </div>
          </Col>
          <Col md={9} lg={5} className=" mt-sm-5  m-auto ">
            <div className="w-100">
              <img className=" w-100" src={about_img} alt="about_imgs" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
