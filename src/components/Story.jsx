import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import gif from "../assets/images/gif.gif";
import twocrcle from "../assets/images/img/crcles.png";
import rightcrcle from "../assets/images/img/rightcrcles.png";
const Story = () => {
  return (
    <section className="pb-5 position-relative">
      <Container>
        <Row className="py-lg-5 align-items-center justify-content-center">
          <Col md={9} lg={6}>
            <div className="avatar overflow-hidden w-100 ">
              <img className="w-100 avatar  " src={gif} alt="gif" />
            </div>
          </Col>{" "}
          <Col lg={6} className=" text-center text-lg-start">
            <div className=" ms-xl-5 mt-sm-5 mt-4 ">
              <div className="text-center text-lg-start  mb-lg-0">
                <span className=" ff_highspeed fw-normal fs_5xl clr_white story ">
                  STORY
                </span>
              </div>
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
        </Row>
      </Container>
      <div className="position-absolute sec2_left_crcle_pos d-none d-xxl-block">
        <div className=" position-relative">
          <div className="blue_crcle position-absolute top-0"></div>
          <img src={twocrcle} alt="twocrcle" />
        </div>
      </div>
      <div className="position-absolute sec2_right_crcle_pos d-none d-xxl-block">
        <div className=" position-relative">
          <div className="blue_crcle position-absolute top-0"></div>
          <img src={rightcrcle} alt="rightcrcle" />
        </div>
      </div>
    </section>
  );
};

export default Story;
