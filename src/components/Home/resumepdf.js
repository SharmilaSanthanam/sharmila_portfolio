import React from 'react';
import Resume from "../../images/Resume.pdf";

const ResumePdf = () => {
  return (
    <div> 
       <a href={"https://drive.google.com/file/d/1nJq0P8NmpkkyOQKDCoxz28xD1s8BSOGe/view?usp=share_link"} download style={{color:"green"}}>Click here to download RESUME!!!</a>
         <object width="100%" height="500" data={Resume} type="application/pdf">
        
         </object>
      </div>
  )
}

export default ResumePdf;