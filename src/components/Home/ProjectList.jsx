import "./projectList.css";
import Project from "../Projects/project";
import { projects } from "../../data";

const ProjectList = () => {
 return (
   <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire!!!</h1>
        <p className="pl-desc">
          Have a glance at the projects by clicking on the below images...
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
             <div className="pl-texts">
        <p className="pl-desc">
        <a href={"www.youtube.com/@tejvision"} download style={{color:"green"}}></a>
       &nbsp;  &nbsp;       
        </p>
        </div>
      </div>
     
    </div>
  );
};
export default ProjectList;
