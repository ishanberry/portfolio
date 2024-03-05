  import React from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import ProjectCard from "./ProjectCards";
  import Particle from "../Particle";
  import NetflixClone from "../../Assets/Projects/TMA.png";
  import ImageGallery from "../../Assets/Projects/LS.png";

  function Projects() {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={NetflixClone}
                  isBlog={false}
                  title="Police Feedback system"
                  description="Finalist in Rajasthan Police Hackathon 1.0 for the Police Feedback system. Contributed as a Java backend developer, designing SMS and Feedback APIs,
                  integrating Cloudinary Api  for image uploads, and optimizing the complaint filing process with Rajasthan Police."
                  ghlink="https://github.com/Arunodaya9027/RJPOLICE_HACK_1224_Atulya_1.git"
                />
            </Col>
             
             
             
             <Col md={4} className="project-card">
              <ProjectCard
                imgPath={NetflixClone}
                isBlog={false}
                title="Task Manager App"
                description="Developed a robust Spring Boot Task Manager with MySQL, integrating Thymeleaf for dynamic front-end and seamless CRUD functionalities, achieving a concise and intuitive user experience. 
                Implemented MVC architecture and Thymeleaf templating for an intuitive user interface in a Spring Boot Task Manager application with MySQL backend."
                ghlink="https://github.com/ishanberry/Task_Manager_SpringbootApp.git"
                
                
              />
            
            </Col> 
            
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={NetflixClone}
                  isBlog={false}
                  title="Login and Signup Application "
                  description="Java Swing (Frontend) and Backend as MySQL for storing the user data in the database and for Email via Java Mail API and for the connection of Java code with
                  Database JDBC."
                  ghlink="https://github.com/ishanberry/Login-and-Signup-appilication.git"
                />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }

  export default Projects;
