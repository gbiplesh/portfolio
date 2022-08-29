import React from 'react';
import "./../css/skills.css";
import { useNav } from '../customHooks/useNav';

const Skills = () => {
  
	const skillsRef = useNav('Skills');

  return ( 
    <section ref={skillsRef} id='skillsContainer'>
      
      <h3>Skills</h3>

      <div className="skillList">
        <ul>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt='html'/>
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt='html'/>
          </li>
          <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" />
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt='html'/>
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='html'/>
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" alt='html'/>
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" alt='html'/>
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='html'/>
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="java" />
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt="git" />
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt='photoshop'/>
          </li>
        </ul>
      </div>
    </section>
   );
}
 
export default Skills;