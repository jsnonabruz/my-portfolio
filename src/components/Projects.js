import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="project-list">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>A cool project description goes here.</p>
        </div>

        <div className="project-card">
          <h3>Project 2</h3>
          <p>Another awesome project.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
