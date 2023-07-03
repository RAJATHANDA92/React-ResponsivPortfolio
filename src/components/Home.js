import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="p-home" id="home">
        <div className="p-content">
          <h3 className="p-h4">Hello, It's Me</h3>
          <h2 className="p-h1">Rajat</h2>
          <h3 className="p-h3">
            And I'm a <span className="p-span"> Frontend Developer</span>
          </h3>
          <p className="p-p">
            I'm a creative and passionate frontend developer with over 1 years
            of experience in building responsive and user-friendly websites. I
            have a strong knowledge of HTML, CSS, JavaScript, and React. You
            can check out my work on my GitHub profile.
          </p>
          <div className="social-media">
            <Link
              className="p-link"
              to="https://www.linkedin.com/in/rajat-handa-5b4123135/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </Link>
            <Link
              className="p-link"
              to="https://www.instagram.com/rajathanda92/"
            >
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link
              className="p-link"
              to="https://www.facebook.com/rajat.handa.79/"
            >
              <i class="fa-brands fa-facebook"></i>
            </Link>
            <Link className="p-link" to="https://github.com/RAJATHANDA92">
              <i class="fa-brands fa-github"></i>
            </Link>
          </div>
          <div>
            <Link
              to="https://drive.google.com/file/d/1AmK9isA2-C81co0jPVN0sSynPA_WUXTP/view?usp=sharing"
              className="p-btn"
            >
              Download CV
            </Link>
          </div>
        </div>
        <div className="ph-img">
          <img className="p-img" src="/myrbg.png" alt="myPng" />
        </div>
      </section>
    </>
  );
}

export default Home;
