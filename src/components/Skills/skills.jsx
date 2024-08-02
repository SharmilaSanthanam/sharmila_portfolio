import React from 'react';
import "./skills.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aiimage from "../../images/aitool.png";
import Chatimage from "../../images/chatgpt.jpg";
import Canvaimage from "../../images/canva.png";
import Htmlimage from "../../images/html1.png";
import Cssimage from "../../images/css1.png";
import Jsimage from "../../images/JS1.png";
import Reactimage from "../../images/React1.png";
import Nodeimage from "../../images/Node2.png";
import Mongoimage from "../../images/Mongo1.png";
import Adobeimage from "../../images/adobe.png"
import Gitimage from "../../images/git.jpg";
import Aws from "../../images/aws.png";
import Carousel from 'react-bootstrap/Carousel';

const Skills = () => {

  return (
   
     <Container>
      <Row>
           <Col>
    <Carousel indicators={false} pause={false}>

      <Carousel.Item interval={1000}>
        <img
      className="a-img1"
          src={Aiimage}
          alt="Aiimage"
        />
        </Carousel.Item>
       <Carousel.Item interval={1000}>
     
        <img
         className="a-img2"
          src={Chatimage}
          alt="ChatGPT"
        />
        </Carousel.Item>
       <Carousel.Item interval={1000}>
      
        <img
         className="a-img3"
          src={Canvaimage}
          alt="Canva"
        />

      </Carousel.Item>
      </Carousel>
      </Col>
        <Col>
    <Carousel indicators={false} pause={false}>

      <Carousel.Item interval={1000}>
        <img
      className="a-img1"
          src={Jsimage}
          alt="JavaScript"
        />
        </Carousel.Item>
       <Carousel.Item interval={1000}>
     
        <img
         className="a-img2"
          src={Reactimage}
          alt="React"
        />
        </Carousel.Item>
       <Carousel.Item interval={1000}>
      
        <img
         className="a-img3"
          src={Gitimage}
          alt="Git"
        />

      </Carousel.Item>
      </Carousel>
      </Col>
      <Col>
      
      <Carousel indicators={false} pause={false}>

      <Carousel.Item interval={1000}>
        <img
         className="a-img1"
          src={Htmlimage}
          alt="HTML"
        />
        </Carousel.Item>
       <Carousel.Item interval={1000}>
        <img
      className="a-img2"
          src={Nodeimage}
          alt="NodeJs"
        />
        </Carousel.Item>
       <Carousel.Item interval={1000}>
    
        <img
        className="a-img3"
          src={Aws}
          alt="AWS"
        />

      </Carousel.Item>
      
    </Carousel>
    </Col>

    <Col>
      
      <Carousel indicators={false} pause={false}>

      <Carousel.Item interval={1000}>
        <img
          className="a-img1"
          src={Cssimage}
          alt="CSS"
        />
        </Carousel.Item>
       <Carousel.Item interval={1000}>
        <img
       className="a-img4"
          src={Mongoimage}
          alt="MongoDB"
        />
        </Carousel.Item>
       <Carousel.Item interval={1000}>
    
        <img
         className="a-img3"
          src={Adobeimage}
          alt="AdobePhotoshop"
        />

      </Carousel.Item>
      
    </Carousel>
    </Col>
    </Row>
    </Container>
    
  );
}
export default Skills;
