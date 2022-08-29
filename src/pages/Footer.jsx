import React, {useState} from 'react';
import "./../css/footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {

  return ( 
    <>

    <div className="info-list">
      <ul>
        <li>
          <a href="https://github.com/gbiplesh" id='github' >
            <GitHubIcon sx={{ fontSize: 40 }} /> 
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/biplesh-b-k-316379137" id='linkedin'>
            <LinkedInIcon sx={{ fontSize: 40 }} />        
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/gbiplesh" id='insta'>
            <InstagramIcon sx={{ fontSize: 40 }} />        
          </a>
        </li>
        <li>
          <a href="mailto:gbiplesh@gmail.com" target="_top">
            <EmailIcon sx={{ fontSize: 40 }} />        
          </a>
        </li>
      </ul>
    </div>
    
    </>

   );
}
 
export default Footer;