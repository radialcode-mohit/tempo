import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import logo from "../assets/images/svg/logo.svg";
import insta from "../assets/images/svg/insta.svg";
import disocrd from "../assets/images/svg/discord.svg";
import tweeter from "../assets/images/svg/tweeter.svg";
import twocrcle from "../assets/images/img/faqleft.png";
import rightcrcle from "../assets/images/img/faqright.png";
const AccordianSec = () => {
  return (
    <section className="bg_faq position-relative pt-lg-5">
      <Container className="pt-lg-5">
        <div className="text-center mb-5">
          <span className=" ff_highspeed fw-normal fs_5xl clr_white faq ">
            FAQS
          </span>
        </div>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Q1. What is a Cheeky Snails?</Accordion.Header>
            <Accordion.Body>
              Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec
              semper quam quam. Neque sapien, lectus nisi ut et.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-4">
            <Accordion.Header>Q2. When is the launch date?</Accordion.Header>
            <Accordion.Body>
              Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec
              semper quam quam. Neque sapien, lectus nisi ut et.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-4">
            <Accordion.Header>Q3. What is the price ? </Accordion.Header>
            <Accordion.Body>
              Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec
              semper quam quam. Neque sapien, lectus nisi ut et.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-4">
            <Accordion.Header>Q4. How many snails can I mint?</Accordion.Header>
            <Accordion.Body>
              Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec
              semper quam quam. Neque sapien, lectus nisi ut et.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-4">
            <Accordion.Header>Q5. When is reveal time?</Accordion.Header>
            <Accordion.Body>
              Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec
              semper quam quam. Neque sapien, lectus nisi ut et.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="mt-4">
            <Accordion.Header>Q6. How many snails will ?</Accordion.Header>
            <Accordion.Body>
              Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec
              semper quam quam. Neque sapien, lectus nisi ut et.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className="mt-4">
            <Accordion.Header>
              Q7. What is the idea of this collection?
            </Accordion.Header>
            <Accordion.Body>
              Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec
              semper quam quam. Neque sapien, lectus nisi ut et.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="text-center pt-lg-5  mt-lg-5">
          <a href="#">
            <img src={logo} alt="logo" className="pt-5 mt-5" />
          </a>
          <div className="d-flex justify-content-center mt-4 pt-3 ">
            <a href="#" className="hover_transform_imgs ">
              <img
                className="position-relative hovershadow transition"
                src={tweeter}
                alt="tweeter"
              />
            </a>
            <a href="#" className="hover_transform_imgs ">
              <img
                src={insta}
                alt="insta"
                className="ms-4 position-relative hovershadow transition"
              />
            </a>
            <a href="#" className="hover_transform_imgs ">
              <img
                src={disocrd}
                alt="disocrd"
                className="ms-4 position-relative hovershadow transition"
              />
            </a>
          </div>
        </div>
      </Container>
      <p className=" ff_magra fw-normal fs_sm opac_clr_white text-center bdr_top py-3 mt-4 pt-3 mb-0">
        Copyright@Tempo.com
      </p>
      <div className="position-absolute bottom-0 start-0  d-none d-xxl-block">
        <div className=" position-relative">
          <div className="blue_crcle position-absolute top-0"></div>
          <img src={twocrcle} alt="twocrcle" />
        </div>
      </div>
      <div className="position-absolute  top-0 end-0 d-none d-xxl-block">
        <div className=" position-relative">
          <div className="blue_crcle position-absolute "></div>
          <img src={rightcrcle} alt="rightcrcle" />
        </div>
      </div>
    </section>
  );
};

export default AccordianSec;
