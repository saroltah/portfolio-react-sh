import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div class="container">
        <div class="row present-myself">
          <div class="col-md-7">
            <h1 class="name">Sarolta Hegyi</h1>
            <h2 class="title">Junior front-end developer</h2>
          </div>
          <div class="col-md-5">
            <img
              src="src/images/én.jpg"
              alt="photo about Sarolta Hegyi"
              class="img-fluid image-about-me"
            />
            <br />
            <div class="coming-from">Based in Scandinavia</div>
          </div>
        </div>
        <div class="row info-about-me">
          <div class="col-md-7">
            <div class="coding-skills">
              <p>
                <span class="main-line">Coding tools I use:</span>
                <ul>
                  <li>VS Code</li>
                  <li>
                    GitHub -
                    <a
                      href="https://github.com/saroltah/ "
                      target="_blank"
                      title="my github account"
                      class="project-"
                    >
                      @saroltah{" "}
                    </a>
                  </li>
                </ul>
              </p>
              <p class="technologies">
                <span class="main-line">Technologies I enjoy to use:</span>
                <ul>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Responsive development</li>
                </ul>
                See my resume -{" "}
                <a
                  href="https://drive.google.com/file/d/19yJ4PVbrYoIjrURp__HCvdBZ4Ve4a5Jl/view?usp=sharing"
                  class="resume url"
                  target="_blank"
                  title="my resume link"
                >
                  {" "}
                  Sarolta Hegyi CV
                </a>
              </p>
            </div>
          </div>
          <div class="col-md-5">
            <p class="free-time">
              <span class="main-line">When I am not coding I am:</span>
              <ul>
                <li> 🎸 Dancing at concerts</li>
                <li> 💪 Training in fitness classes</li>
                <li> 🌄 Hiking on mountains</li>
                <li> ✈️ Discovering new countries</li>
                <li> 🖌️ Painting mandalas</li>
              </ul>
            </p>
            <p class="languages">I speak 4 languages: 🇭🇺 🇺🇸 🇸🇪 🇪🇸</p>
            <p class="other-qualifications">
              I am also a qualified preschool teacher, TEFL instructor and
              magazine writer.
            </p>
            <p>
              {" "}
              Currently learning <strong>Next.js</strong>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
