import "./home.css";
import { Container, Row, Col } from 'react-bootstrap';
import Mern from "../../images/webdev1.jpg";

const Home = () => {

  return (
    <Container>
      <Row >
        <Col>
          <div className="row justify-content-center">
            <h2 className="i-intro">Hi, Myself</h2>
            <h1 className="i-name">Sharmila</h1>
            <div className="i-title-wrapper">
              <div className="i-title-item">Full-Stack Web Developer</div><br></br><br></br>
            </div>
          </div>
          <div> 
          <a href={"https://drive.google.com/file/d/1nJq0P8NmpkkyOQKDCoxz28xD1s8BSOGe/view?usp=share_link"} target="_blank" rel="noreferrer" className="resume" download style={{color:"green"}}>
          Click to view the Resume!!!
      </a>
       </div>
        </Col>
        <Col>
          <div className="i-title">
            <img src={Mern} alt="Mern" style={{ width: "370px" }} className="imag1" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;