import React from "react";
import "./Projects.css";
import proj from "../assets/proj.png";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <img src={proj} alt="Project" className="project-img"/>
          <h3>My Project</h3>
          <p>My E-Commerce</p>
        </div>

      </div>
    </section>
  );
}

export default Projects;
