import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="contact-form">
        <span className="get-in-touch">
          {" "}
          Let's get in touch <i className="fa-regular fa-face-smile"></i>
        </span>
        <br />
        <br />
        <div className="contact-box justify-content-between">
          <a
            href="https://github.com/saroltah/"
            className="link url"
            target="_blank"
            title="my github account"
          >
            <i
              className="fa-brands fa-square-github icon"
              alt="github icon"
            ></i>{" "}
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saroltahegyi/"
            target="_blank"
            title="my linkedin"
            className="link url"
          >
            <i className="fa-brands fa-linkedin icon" alt="linkedin icon"></i>{" "}
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/19yJ4PVbrYoIjrURp__HCvdBZ4Ve4a5Jl/view?usp=sharing"
            target="_blank"
            title="my resume"
            class="link url resume"
          >
            <i className="fa-solid fa-print  icon" alt="print-resume icon"></i>{" "}
            Resume
          </a>
          <br />
          <br />
          <a
            href="mailto:sarolta.hegyi@gmail.com"
            className="link url"
            title="my email"
          >
            <i
              className="fa-solid fa-envelope icon"
              alt="print-resume icon"
            ></i>{" "}
            sarolta.hegyi@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
