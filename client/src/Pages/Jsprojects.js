import React from "react";
import "./Jsprojects.css";
import ProjectData from "../Data/Jsprojects.json";
import githubImg from "../assets/img/github.png";
import pf1 from "../assets/img/project1.png";
import pf2 from "../assets/img/project2.png";
import pf3 from "../assets/img/project3.png";

const Jsprojects = () => {
  return (
    <div className="jsprojects">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <h1>Projects</h1>
            <br />
            <div className="row">
              {ProjectData.map((project, i) => (
                <div className="col-sm-6" key={i}>
                  <iframe
                    width="100%"
                    height="300"
                    src={project.projectlink}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <br />
                  <a
                    href={project.codelink}
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} alt={i} />
                  </a>
                </div>
              ))}
            </div>
            <br />
            <h2>Expense Tracker | React JS </h2>
            <p>
              Expense Management / Filters / Javascript Events / Use of CRUD
            </p>
            <br />
            <div className="js">
              <div className="row">
                <div className="col-sm-6">
                  <a
                    href="https://github.com/chandanSingh0/expenseTrackerReactjs"
                    target="_blank"
                  >
                    <img src={pf3} alt="Expense Tracker" />
                  </a>
                  <br />
                  <a
                    href="https://github.com/chandanSingh0/expenseTrackerReactjs"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
              </div>
            </div>
            <br />
            <h2>CRUD Operations | React JS | MERN</h2>
            <p>
              Use of React Complex Hooks / MERN / Javascript Events / CRUD APIs
            </p>
            <br />
            <div className="js">
              <div className="row">
                <div className="col-sm-6">
                  <a
                    href="https://github.com/chandanSingh0/crudReactjs"
                    target="_blank"
                  >
                    <img src={pf1} alt="Ecommerce Small Project" />
                  </a>
                  <br />
                  <a
                    href="https://github.com/chandanSingh0/crudReactjs"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
                <div className="col-sm-6">
                  <a
                    href="https://github.com/chandanSingh0/crudMERN"
                    target="_blank"
                  >
                    <img src={pf2} alt="Ecommerce Small Project" />
                  </a>
                  <a
                    href="https://github.com/chandanSingh0/crudMERN"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jsprojects;
