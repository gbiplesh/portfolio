import React from 'react';
import "./../css/navbar.css";


const Navbar = () => {
  return ( 
    <>
    <div className='nav-list'>
        <ul>
          <li><a href="/about"><h4>About</h4></a></li>
          <li><a href="/projects"><h4>Projects</h4></a></li>
          <li><a href="/skills"><h4>Skills</h4></a></li>
          <li><a href="/experience"><h4>Experience</h4></a></li>
          <li><a href="/interests"><h4>Interests</h4></a></li>
        </ul>
    </div>
    </>
   );
}
 
export default Navbar;