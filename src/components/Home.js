import React from "react";
import "./Home.css";
import profile from "../assets/profile.jpg";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">

        <div className="text-area">
          <h1>Hello, I'm <span>John Jason L. Zurbano</span></h1>
          <p>A passionate Web Developer.</p>

          <a className="btn" href="#projects">View My Work</a>
        </div>

        <div className="image-area">
          <img src={profile} alt="Profile" className="profile-img" />
        </div>

      </div>
    </section>
  );
}

export default Home;

