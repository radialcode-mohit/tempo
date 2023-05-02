import React from "react";
import MyNav from "./MyNav";
import { Col, Container, Row } from "react-bootstrap";
import togglebtn from "../assets/images/svg/toggle.svg";
const Header = () => {
  return (
    <section className="bghero">
      <MyNav />
      <Container className="py-5">
        <Row className="py-lg-5 my-lg-5">
          <Col xl={7} className=" text-center text-xl-start">
            <div>
              <p className=" ff_highspeed clr_white fw-normal fs_6xl mb-0">
                Ornare orn nulla
                <span className="bg_hero_textlinear"> sed turp</span>
                <span className="clr_white"> \is blandit</span>
              </p>
              <p className=" ff_magra fw-norma fs_lg clr_white pe-xl-5">
                Facilisi nec at ullamcorper consequat venenatis cursus <br />{" "}
                sagittis. Aliquet venenatis urna ege.
              </p>
              <div className="d-flex flex-column flex-sm-row mt-5 pt-2 justify-content-center justify-content-xl-start">
                {" "}
                <div className=" position-relative  contact_btn_bg getstarted_btn padding_getstarted_btn">
                  <a
                    href="#"
                    className="ff_highspeed fw-normal   fs_md clr_white "
                  >
                    Get Started
                  </a>
                </div>
                <div className="mt-3 mt-sm-0 osition-relative ms-sm-4  more_btn_bg  padding_getstarted_btn">
                  <a
                    href="#"
                    className="ff_highspeed fw-normal   fs_md clr_white "
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-center">
          <img
            src={togglebtn}
            className="py-4 py-xl-5 cur_poi"
            alt="toggleicon"
          />
        </div>
      </Container>
    </section>
  );
};

export default Header;
