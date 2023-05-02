import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import gif from "../assets/images/gif.gif";

const Story = () => {
  return (
    <section>
      <Container>
        <Row className="py-5 align-items-center justify-content-center">
          <Col md={9} lg={6}>
            <div className="avatar overflow-hidden w-100 ">
              <img className="w-100 avatar  " src={gif} alt="gif" />
            </div>
          </Col>{" "}
          <Col lg={6}>
            <div className=" ms-xl-5 mt-sm-5 mt-4">
              <h3 className=" ff_highspeed fw-normal fs_5xl clr_white">
                Story
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
        </Row>
      </Container>
    </section>
  );
};

export default Story;
