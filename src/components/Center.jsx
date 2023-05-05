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
      arrows: true,
      adaptiveHeight: false,
      speed: 500,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            centerMode: true,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            centerMode: false,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1,
            centerMode: false,
            dots: true,
          },
        },
      ],
    };
    return (
      <section>
        <Container className=" my-lg-5 pt-5 pb-lg-5 ">
          <div className="text-center mb-lg-5">
            <span className=" ff_highspeed fw-normal fs_5xl clr_white ournft ">
              OUR NFT
            </span>
          </div>
          <div className=" w-100 h-100 bg- white pb-5 pb-lg-0 ">
            <Slider {...settings} className=" mb-5 pb-5 pb-xl-0 mb-lg-0     ">
              <div className="pt-md-5 pb-5 pb-md-0  px-4 px-md-3">
                <div className=" mt-5 pt-5 ">
                  <div className=" avatar_3 box_shadow w-100 mt-5 ">
                    <img
                      className=" pt_minus w_100 women_width  "
                      src={women}
                      alt="men"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-md-5 pb-5 pb-md-0  px-4 px-md-3">
                <div className=" mt-5 pt-5">
                  <div className=" avatar_3 box_shadow w-100 mt-5 ">
                    <img className=" pt_minus w_100" src={women_2} alt="men" />
                  </div>
                </div>
              </div>
              <div className="pt-md-5 pb-5 pb-md-0  px-4 px-md-3">
                <div className=" mt-5 pt-5">
                  <div className=" avatar_3 box_shadow w-100 mt-5 ">
                    <img className=" pt_minus w_100" src={women_2} alt="men" />
                  </div>
                </div>
              </div>
              <div className="pt-md-5 pb-5 pb-md-0  px-4 px-md-3">
                <div className=" mt-5 pt-5">
                  <div className=" avatar_3 box_shadow w-100 mt-5 ">
                    <img
                      className=" pt_minus w_100 men_width"
                      src={men}
                      alt="men"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-md-5 pb-5 pb-md-0  px-4 px-md-3">
                <div className=" mt-5 pt-5">
                  <div className=" avatar_3 box_shadow w-100 mt-5 ">
                    <img
                      className=" pt_minus w_100 men_width"
                      src={men}
                      alt="men"
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </section>
    );
  }
}
