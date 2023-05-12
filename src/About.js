import React from "react";
import "./About.css";
import images from "./images";

export default function About() {
  return (
    <div className="About">
      <div className="container">
        <div className="row present-myself">
          <div className="col-md-7">
            <h1 className="name">Sarolta Hegyi</h1>
            <h2 className="title">Junior front-end developer</h2>
          </div>
          <div className="col-md-5">
            <img
              src={images.portre}
              alt="photo about Sarolta Hegyi"
              className="img-fluid image-about-me"
            />
            <br />
            <div className="coming-from">Based in Scandinavia</div>
          </div>
        </div>
        <div className="row info-about-me">
          <div className="col-md-7">
            <div className="coding-skills">
              <p>
                <span className="main-line">Coding tools I use:</span>
                <ul>
                  <li>VS Code</li>
                  <li>
                    GitHub -{" "}
                    <a
                      href="https://github.com/saroltah/ "
                      target="_blank"
                      title="my github account"
                      className="project url"
                    >
                      @saroltah{" "}
                    </a>
                  </li>
                </ul>
              </p>
              <p className="technologies">
                <span className="main-line">Technologies I enjoy to use:</span>
                <ul>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Responsive development</li>
                </ul>
                See my resume -{" "}
                <a
                  href="https://drive.google.com/file/d/19yJ4PVbrYoIjrURp__HCvdBZ4Ve4a5Jl/view?usp=sharing"
                  className="resume url"
                  target="_blank"
                  title="my resume link"
                >
                  {" "}
                  Sarolta Hegyi CV
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <p className="free-time">
              <span className="main-line">When I am not coding I am:</span>
              <ul>
                <li> 🎸 Dancing at concerts</li>
                <li> 💪 Training in fitness classNamees</li>
                <li> 🌄 Hiking on mountains</li>
                <li> ✈️ Discovering new countries</li>
                <li> 🖌️ Painting mandalas</li>
              </ul>
            </p>
            <p className="languages">I speak 4 languages: 🇭🇺 🇺🇸 🇸🇪 🇪🇸</p>
            <p className="other-qualifications">
              I am also a qualified preschool teacher, TEFL instructor and
              magazine writer.
            </p>
            <p>
              {" "}
              Currently learning <strong>Next.js</strong>.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
