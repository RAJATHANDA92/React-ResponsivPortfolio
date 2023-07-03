import React from "react";

function About() {
  return (
    <div className="about">
      <h1 className="p-span">Skills</h1>
      <br />
      <div className="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 className="card-title">FrontEnd Technologies</h5>
              <p className="card-text">React.Js, CSS, HTML</p>
              <p className="card-text">JavaScript, Bootstrap</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 className="card-title">Backend Technologies</h5>
              <p className="card-text">Java, C++, Spring Boot</p>
              <p className="card-text">JavaScript, NodeJs</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 className="card-title">Database Technologies</h5>
              <p className="card-text">Oracle, SQL, MySQL</p>
              <p className="card-text">Pl SQL, MongoDb</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1 className="p-span">Education</h1>
      <br />
      <div className="row">
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 className="card-title">
                Post Graduation Diploma in Advance Computing
              </h5>
              <p className="card-text">March 2022 To Sep 2022</p>
              <p className="card-text">Completed With 65.8% Marks</p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 className="card-title">B.Tech</h5>
              <p className="card-text">July 2014 To Jun 2018</p>
              <p className="card-text">Completed With 65.8% Marks</p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 className="card-title">Intermediate</h5>
              <p className="card-text">July 2011 To Jun 2012</p>
              <p className="card-text">Completed With 55% Marks</p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 className="card-title">High School</h5>
              <p className="card-text">July 2009 To Jun 2010</p>
              <p className="card-text">Completed With 58.3% Marks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
