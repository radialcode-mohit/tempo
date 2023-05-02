import React from "react";
import videoicon from "../assets/images/svg/videoicon.svg";
import videoimg from "../assets/images/img/videoimg.png";
import { Container } from "react-bootstrap";
import twocrcle from "../assets/images/img/crcles.png";
import rightcrcle from "../assets/images/img/rightcrcles.png";
const WatchVideo = () => {
  return (
    <section className=" position-relative  py-5">
      <Container className="py-lg-5 mt-lg-5">
        <div className="text-center mb-5">
          <span className=" ff_highspeed fw-normal fs_5xl clr_white yellow_linear_bg ">
            watch video
          </span>
        </div>
        <div className="position-relative cur_poi">
          <div className=" video_img_border">
            <img src={videoimg} alt="videoimg" className="w-100 " />
          </div>
          <img
            src={videoicon}
            className="w-100 max_w_111 position-absolute start-50 top-50 translate-middle"
            alt="videoicon"
          />
        </div>
      </Container>
      <div className="position-absolute sec4_left_crcle_pos d-none d-xxl-block">
        <div className=" position-relative">
          <div className="blue_crcle position-absolute top-0"></div>
          <img src={twocrcle} alt="twocrcle" />
        </div>
      </div>
      <div className="position-absolute sec4_right_crcle_pos d-none d-xxl-block">
        <div className=" position-relative">
          <div className="blue_crcle position-absolute top-0"></div>
          <img src={rightcrcle} alt="rightcrcle" />
        </div>
      </div>
    </section>
  );
};

export default WatchVideo;
