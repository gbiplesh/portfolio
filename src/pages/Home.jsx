import React from 'react';
import biplesh from "./../assets/img/biplesh.jpg";
import "./../css/home.css";
import { useNav } from '../customHooks/useNav';

const Home = () => {
  // useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement
  
	const homeRef = useNav('Home');


  return ( 
    < section ref={homeRef} id='homeContainer'>
      <div className="homePage"> 
        <div className="homeImage shadow">  
            <img src={biplesh} alt="biplesh" style={{ filter: 'drop-shadow(2px 4px 6px black)', borderRadius: '5px' }} />
        </div> 

        <div id="animated-parent-div">
          <div id="animated">
            <div id="biplesh"><h1>Biplesh</h1></div> 
            <div id="bk"> 
              <span><h1>&nbsp; B K</h1></span>
            </div>
          </div>
            </div>          

      </div> 
    </section>
   );
}
 
export default Home;