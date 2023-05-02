import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import men from "../assets/images/png/men.png";
import women from "../assets/images/png/women.png";
import women_2 from "../assets/images/png/women_2.png";
export default class CenterMode extends Component {
  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      adaptiveHeight: false,
      speed: 500,
    };
    return (
      <section>
        <Container className=" my-5 py-5 overflow-hidden">
          <div className=" w-100 h-100 bg- white py-5 ">
            <Slider {...settings} className=" py-5 px-3  ">
              <div className=" w-100 h-100">
                <div className="avatar position-relative slide_box">
                  <img
                    src={women}
                    className=" position-absolute img_position"
                    alt="men"
                  />
                </div>
              </div>
              <div className=" w-100 h-100">
                <div className="avatar position-relative slide_box">
                  <img
                    src={women_2}
                    className=" position-absolute img_position"
                    alt="men"
                  />
                </div>
              </div>{" "}
              <div className=" w-100 h-100">
                <div className="avatar position-relative slide_box">
                  <img
                    src={men}
                    className=" position-absolute img_position"
                    alt="men"
                  />
                </div>
              </div>{" "}
              <div className=" w-100 h-100">
                <div className="avatar position-relative slide_box">
                  <img
                    src={women}
                    className=" position-absolute img_position"
                    alt="men"
                  />
                </div>
              </div>{" "}
              <div className=" w-100 h-100">
                <div className="avatar position-relative slide_box">
                  <img
                    src={women}
                    className=" position-absolute img_position"
                    alt="men"
                  />
                </div>
              </div>{" "}
              <div className=" w-100 h-100">
                <div className="avatar position-relative slide_box">
                  <img
                    src={women_2}
                    className=" position-absolute img_position"
                    alt="men"
                  />
                </div>
              </div>{" "}
              <div className=" w-100 h-100">
                <div className="avatar position-relative slide_box">
                  <img
                    src={women}
                    className=" position-absolute img_position"
                    alt="men"
                  />
                </div>
              </div>{" "}
              <div className=" w-100 h-100">
                <div className="avatar position-relative slide_box">
                  <img
                    src={men}
                    className=" position-absolute img_position"
                    alt="men"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </section>
    );
  }
}
