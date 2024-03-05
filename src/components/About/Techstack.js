import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiJava,
  
  DiPython,
  DiGit,
  
} from "react-icons/di";
import {
  
  

  
  
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      
      <Col xs={4} md={2} className="tech-icons">
        
      
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        
      
        <DiJava />
      </Col>
      
      
      
         
    </Row>
  );
}

export default Techstack;
