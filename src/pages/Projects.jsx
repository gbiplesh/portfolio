import React from 'react';
import { Carousel } from "3d-react-carousal";
import { useNav } from '../customHooks/useNav';
import {projectList} from "./../components/ProjectList";

const Projects = () => {
	const projectsRef = useNav('Projects');
  return ( 
    <section ref={projectsRef} id='projectsContainer'>

      <h3>Projects</h3>

      <div style={{maxWidth: "75%", marginLeft: "auto", marginRight: "auto" }}> 
        <Carousel slides={projectList} autoplay={false} interval={1000} arrows={true} /> 
      </div>
    
    
    </section>
   );
}
 
export default Projects;