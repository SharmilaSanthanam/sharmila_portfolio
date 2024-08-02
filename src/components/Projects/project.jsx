import "./project.css";
import Canvaimage from "../../images/canva.png";

const Project = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
          <img
         className="a-img2"
          src={Canvaimage}
          alt="ChatGPT"
        />
        {*   <img src={img} alt="" className="p-img" /> *}
      </a>
    </div>
  );
};

export default Project;
