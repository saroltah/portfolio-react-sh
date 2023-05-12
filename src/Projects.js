import React from "react";
import "./Projects.css";
import images from "./images";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="projects">
        <div className="check-out">
          Check out my favorite projects I have been working on:
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img
              src={images.bobRossProject}
              alt="bob-ross-project-image"
              className="img-fluid project-image first-image"
            />
            <br />

            <a
              href="https://bob-ross-fan-page-by-sarolta-h.netlify.app/"
              target="_blank"
              title="bob ross project link"
              className="project-link url"
            >
              Bob Ross project
            </a>
            <p className="project-description">
              <div className="project-about">Fan page about Bob Ross.</div>
              <br />
              <ul>
                <li>Responsive</li>
                <li>Hero</li>
                <li>Embeds</li>
                <li>CSS grids</li>
                <li>CSS filters</li>
                <li>HTML table</li>
              </ul>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={images.reactWeatherApp}
              alt="react weather-app"
              className="img-fluid project-image"
            />
            <br />

            <a
              href="https://react-weather-app-by-sarolta-h.netlify.app/"
              target="_blank"
              title="react weather-app link"
              className="project-link url"
            >
              React weather app
            </a>
            <p className="project-description">
              {" "}
              <div className="project-about">
                Check the current weather in any city.
              </div>
              <br />
              <ul>
                <li>React</li>
                <li>Responsive</li>
                <li>Api</li>
                <li>Bootstrap</li>
                <li>5 days forecast</li>
                <li>Current date and time</li>
                <li>°C and °F conversion</li>
              </ul>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={images.citiesApp}
              alt="bpimage"
              className="img-fluid project-image"
            />
            <br />

            <a
              href="https://city-portfolio-by-sarolta-h.netlify.app/"
              target="_blank"
              title="cities app app link"
              className="project-link url"
            >
              City portfolio
            </a>
            <p className="project-description">
              <div className="project-about">
                Presenting the cities I have lived in.{" "}
              </div>
              <br />
              <ul>
                <li>Responsive</li>
                <li>Bootstrap</li>
                <li>Self-built menu</li>
                <li>Multiple pages, and links</li>
              </ul>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={images.englishDictionary}
              alt="English dictionary app"
              className="img-fluid project-image"
            />
            <br />

            <a
              href="https://english-dictionary-by-sarolta-h.netlify.app/"
              target="_blank"
              title="english dictionary app link"
              className="project-link url"
            >
              English dictionary app
            </a>
            <p className="project-description">
              <div className="project-about">
                Look up the meaning of any word in English.
              </div>
              <br />
              <ul>
                <li>React</li>
                <li>Responsive</li>
                <li>Api</li>
                <li>Search engine</li>
              </ul>

              <br />
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={images.worldClock}
              alt="world clock app"
              className="img-fluid project-image"
            />
            <br />

            <a
              href="https://world-clock-by-sarolta-h.netlify.app/"
              target="_blank"
              title="world clock link"
              className="project-link url"
            >
              World clock app
            </a>
            <p className="project-description">
              <div className="project-about">
                Check the time all around the world.
              </div>
              <br />
              <ul>
                <li>Responsive</li>
                <li>Api & moment.js</li>
                <li>Select element</li>
                <li>Real-time data</li>
                <li>With the accuracy of seconds</li>
                <li>Multiple time-zones</li>
                <li>Multiple locations</li>
                <li>Current location</li>
              </ul>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={images.climbingProject}
              alt="climbing project image"
              className="img-fluid project-image"
            />
            <br />

            <a
              href="https://wall-climbing-project-by-sarolta-h.netlify.app/"
              target="_blank"
              title="climbing project link"
              className="project-link url"
            >
              Climbing project
            </a>
            <p className="project-description">
              <div className="project-about">Presenting indoor-climbing.</div>
              <br />
              <ul>
                <li>Responsive</li>
                <li>Dark/light theme</li>
                <li>CSS background properties</li>
                <li>CSS grids</li>
                <li>CSS transform</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
