import React, { useState } from "react";
import { Container } from "react-bootstrap";
import mainlogo from "../assets/images/svg/TEMPO.svg";
import cross from "../assets/images/img/cross.png";
const MyNav = () => {
  const [first, setfirst] = useState(true);
  return (
    <nav className="nav_bg_rgb py_2 1 py-4">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <a href="#">
            <img src={mainlogo} className="max_w_168" alt="mainlogo" />
          </a>
          <ul
            className={
              first
                ? "d-flex mb-0 ps-0 mobile_view_ul flex-column flex-lg-row justify-content-center align-items-center top_minus_100"
                : "d-flex mb-0 ps-0 mobile_view_ul flex-column flex-lg-row justify-content-center align-items-center top_0"
            }
          >
            <li
              className=" position-relative mt-5 mt-lg-0"
              onClick={() => {
                setfirst(true);
              }}
            >
              <a
                href="#"
                className=" ff_magra fw-normal fs_lg clr_white hover_underline"
              >
                Home
              </a>
            </li>
            <li
              className=" position-relative mt-5 mt-lg-0 ms_30"
              onClick={() => {
                setfirst(true);
              }}
            >
              <a
                href="#"
                className=" ff_magra fw-normal fs_lg clr_white hover_underline"
              >
                About Us
              </a>
            </li>
            <li
              className=" position-relative mt-5 mt-lg-0 ms_30"
              onClick={() => {
                setfirst(true);
              }}
            >
              <a
                href="#"
                className=" ff_magra fw-normal fs_lg clr_white hover_underline"
              >
                NFTs
              </a>
            </li>
            <li
              className=" position-relative mt-5 mt-lg-0 ms_30"
              onClick={() => {
                setfirst(true);
              }}
            >
              <a
                href="#"
                className=" ff_magra fw-normal fs_lg clr_white hover_underline"
              >
                Roadmap
              </a>
            </li>
            <li
              className=" position-relative mt-5 mt-lg-0 ms_30"
              onClick={() => {
                setfirst(true);
              }}
            >
              <a
                href="#"
                className=" ff_magra fw-normal fs_lg clr_white hover_underline"
              >
                Team
              </a>
            </li>
            <li
              className=" position-relative mt-5 mt-lg-0 ms_30"
              onClick={() => {
                setfirst(true);
              }}
            >
              <a
                href="#"
                className=" ff_magra fw-normal fs_lg clr_white hover_underline"
              >
                FAQ
              </a>
            </li>
            <li
              className=" position-relative mt-5 mt-lg-0 ms_57"
              onClick={() => {
                setfirst(true);
              }}
            >
              <a
                href="#"
                className="ff_highspeed fw-normal contact_btn_bg box_shadow_cntct_bg fs_md clr_white padding_contact_btn"
              >
                Connect
              </a>
            </li>
            <img
              src={cross}
              alt="cross"
              onClick={() => {
                setfirst(true);
              }}
              className=" position-absolute cross_icon_position d-lg-none"
            />
          </ul>
          <a
            href="#"
            className="nav_icon_container d-lg-none"
            onClick={() => {
              setfirst(false);
            }}
          >
            <span className="nav_icons"></span>
            <span className="nav_icons mt-2"></span>
            <span className="nav_icons mt-2"></span>
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default MyNav;
