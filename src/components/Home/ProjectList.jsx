import "./projectList.css";
import Project from "../Projects/project";
import { projects } from "../../data";

const ProjectList = () => {
 return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire!!!</h1>
        <p className="pl-desc">
          Have a glance at the project by clicking on the below image...
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
       {* 
       <div className="pl-texts">
        <p className="pl-desc">
        <a href={"https://github.com/SharmilaSanthanam/RentUrBookFrontend"} download style={{color:"green"}}>Frontend source code</a>
       &nbsp;  &nbsp;
    
        <a href={"https://github.com/SharmilaSanthanam/RentUrBookBackend"} download style={{color:"green"}}>Backend source code</a> 
        
        </p>
        </div>
       *}
      </div>
     
    </div>
  );
};

export default ProjectList;
