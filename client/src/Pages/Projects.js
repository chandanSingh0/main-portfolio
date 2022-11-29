import React from "react";
import MERNTALKative from "../Data/Portfolioimg/MERNTALKative.png";
import G_Docs from "../Data/Portfolioimg/G_Docs.png";
import NOTES_keeper from "../Data/Portfolioimg/NOTES_keeper.png";
import Reactquiz from "../Data/Portfolioimg/Reactquiz.png";
import Postman from "../Data/Portfolioimg/Postman.png";
import GOT from "../Data/Portfolioimg/GOT.png";
import portfolio from "../Data/Portfolioimg/portfolio.png";
import Expense from "../Data/Portfolioimg/Expense.png";

import "./Projects.css";

const Portfolio = () => {
  return (
    <div id="portfolio" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              <div className="col-sm-12">
                <h1>Portfolio</h1>
                <br />
              </div>
              <div className="col-sm-6">
                <div className="imgsec" data-aos="zoom-in">
                  <h5>MERN-TALKative app</h5>
                  <img
                    src={MERNTALKative}
                    className="img-fluid"
                    alt="MERNTALKative"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="imgsec" data-aos="zoom-in">
                  <h5>MERN-GOOGLEdocs</h5>

                  <img src={G_Docs} className="img-fluid" alt="G_Docs" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <h5>Reactjs-NOTES_keeper</h5>

                  <img
                    src={NOTES_keeper}
                    className="img-fluid"
                    alt="NOTES_keeper"
                  />
                </div>
              </div>
              <div className="col-sm-5">
                <div className="imgsec" data-aos="zoom-in">
                  <h5>REACT-quiz</h5>

                  <img src={Reactquiz} className="img-fluid" alt="Reactquiz" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="imgsec" data-aos="zoom-in">
                  <h5>PostmanClone</h5>

                  <img src={Postman} className="img-fluid" alt="Postman" />
                </div>
              </div>
              <div className="col-sm-5">
                <div className="imgsec">
                  <h5>Reactjs_json_GOT</h5>

                  <img src={GOT} className="img-fluid" alt="GOT" />
                </div>
              </div>
              <div className="col-sm-7">
                <div className="imgsec">
                  <h5>portfolio</h5>

                  <img src={portfolio} className="img-fluid" alt="portfolio" />
                </div>
              </div>
              <div className="col-sm-5">
                <div className="imgsec">
                  <h5>Expense</h5>

                  <img src={Expense} className="img-fluid" alt="Expense" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
