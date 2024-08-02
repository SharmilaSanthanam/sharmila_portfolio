import "./experience.css";
import Musescore from "../../images/musescore.png"
import Mern from "../../images/merndev.png"
import Adobe from "../../images/adobe.png"
import Content from "../../images/content.png"
import { Col, Container, Row } from "react-bootstrap";

const Experience = () => {
  return (
    <Container>
      <Row>
        <Col>
        
          <img src={Musescore} alt="Musescore" style={{ width: "350px" }} className="img1" />
          <p className="a-desc">
            Started in the Musical language Software World as a Data operator in <b>Musescore Software</b>!!!
          </p>

        </Col>
        <Col>
       
          <img src={Adobe} alt="Adobe" style={{ width: "350px" }}  className="img2" />
          <p className="a-desc">
            Entered into the PhotoGraphy World of <b>Adobe Photoshop</b> as a Photo Editor!!!
          </p>
     
        </Col>
          <Col>
     
          <img src={Mern} alt="Mern" style={{ width: "350px" }}  className="img3" />
          <p className="a-desc">
            Enjoyed the journey as a <b>Full-Stack Web developer</b> !!!
          </p>
         
        </Col>
        <Col>
     
          <img src={Content} alt="Content" style={{ width: "350px" }}  className="img4" />
          <p className="a-desc">
            At this moment, am enjoying the present wonderful journey as a <b>Content Creator and Designer</b> !!!
          </p>
         
        </Col>
      </Row>
    </Container>

  );
};

export default Experience;
