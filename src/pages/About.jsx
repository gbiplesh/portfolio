import React from 'react';
import "./../css/about.css";
import { Paper, CardContent, Container } from "@material-ui/core";
import { useNav } from '../customHooks/useNav';

const About = () => {
  
	const aboutRef = useNav('About');

  return ( 
    <section ref={aboutRef} id='aboutContainer'>
      <div className='about'>

        <h3>About Me</h3>

        <Container >
        
          <Paper 
            square 
            elevation={6} 
            variant="outlined" 
            sx={{ borderRadius: 100 }}
          >

              <CardContent>
                <p>I am a Web developer with industry experience building websites and web applications. I specialize in PHP and have professional experience working with React. I also have experience working with JavaScript, ES6, Node, SQL and SASS.</p> 
              </CardContent>
          </Paper>
      
        </Container>      

      </div>

    </section>
   );
}
 
export default About;