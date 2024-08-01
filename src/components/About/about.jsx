import "./about.css";
import Mern from "../../images/mern.png"
import { Container,Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container>
   <Row>  
   <div className="row justify-content-center">
       <Col>   
           <img src={Mern} alt="Designer & Content Creator" style={{ width: "350px" }} className="img"/> 
       </Col>
       <Col>
        <h1 className="a-title">Am an...</h1><br></br>
        <p className="a-desc">
         Electrical and Electronics Engineering Graduate...
        </p>
 <p className="a-desc">
Enjoys the journey of learning new things...
        </p> 
        <p className="a-desc">
          Detail Oriented One...
        </p>     
    </Col>
    </div>
    </Row>
    </Container>   
  );
};
export default About;
