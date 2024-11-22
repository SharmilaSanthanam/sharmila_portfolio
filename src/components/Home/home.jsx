import "./home.css";
import { Container, Row, Col } from 'react-bootstrap';
import Mern from "../../images/Content.jpg";
import Content from "../../images/content.png"

const Home = () => {

  return (
    <Container>
      <Row >
        <Col>
          <div className="row justify-content-center">
            <h2 className="i-intro">Hi, Myself</h2>
            <h1 className="i-name">Sharmila</h1>
            <div className="i-title-wrapper">
              <div className="i-title-item">Content Creator and Designer</div><br></br><br></br>
            </div>
          </div>
         
        </Col>
        <Col>
          <div className="i-title">
            <img src={Content} alt="Mern" style={{ width: "750px" }} className="imag1" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
