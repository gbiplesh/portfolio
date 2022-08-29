import React from 'react';
import "./../css/experience.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { useNav } from '../customHooks/useNav';

const Experience = () => {

  const experienceRef = useNav('Experience'); 

  return ( 
    <section ref={experienceRef} id='experienceContainer'>

      <h3>Experience & Education</h3>

      <div className='experience'>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#6B6A65', color: '#eae7dc' }}
            contentArrowStyle={{ borderRight: '7px solid  #6B6A65' }}
            date="2022"
            dateClassName='dateGrey'
            iconStyle={{ background: '#6B6A65', color: '#EEDB98' }}
            icon={<SchoolIcon/>}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "#eae7dc" }}>Bachelor of Information Technology <br></br>@Sydney International School of Technology And Commerce</h3>
            <br/>
            <h4 className="vertical-timeline-element-subtitle">Sydney, NSW</h4>
            <p style={{ color: "#eae7dc" }}>
              User Experience, Web Design, PHP and MySQL 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021"
            iconStyle={{ background: '#6B6A65', color: '#EEDB98' }}
            icon={<WorkIcon/>}
          >
            <h3 className="vertical-timeline-element-title">Personal Projects  <br></br>@ Home </h3>
            <br/>
            <h4 className="vertical-timeline-element-subtitle">Sydney, NSW</h4>
            <p>
              Full Stack Development 
            </p>
            <span>
              MERN, Django, PHP and MySQL, Github
            </span>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#6B6A65', color: '#eae7dc' }}
            contentArrowStyle={{ borderRight: '7px solid  #6B6A65' }}
            date="2020"
            dateClassName='dateGrey'
            iconStyle={{ background: '#6B6A65', color: '#EEDB98' }}
            icon={<WorkIcon/>}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "#eae7dc" }}>Web Developer Intern <br></br>@ Pulp We Media</h3>
            <br/>
            <h4 className="vertical-timeline-element-subtitle">Sydney, NSW</h4>
            <p  style={{ color: "#eae7dc" }}>
              Frontend Development, SEO Optimization, User Experience 
            </p>
            <span style={{ color: "#eae7dc" }}>
              MERN, SEO, Github
            </span>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020"
            iconStyle={{ background: '#6B6A65', color: '#EEDB98' }}
            icon={<SchoolIcon/>}
          >
            <h3 className="vertical-timeline-element-title">Advanced Diploma of Computer Systems Technology <br></br> @International Institute of Business and Information Technology</h3>
            <br/>
            <h4 className="vertical-timeline-element-subtitle">Sydney, NSW</h4>
            <p>
              Java, Web Development 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#6B6A65', color: '#eae7dc' }}
            contentArrowStyle={{ borderRight: '7px solid  #6B6A65' }}
            date="2019"
            dateClassName='dateGrey'
            iconStyle={{ background: '#6B6A65', color: '#EEDB98' }}
            icon={<WorkIcon/>}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "#eae7dc" }}>Wordpress Developer / Designer <br></br> @Safal SEVS</h3>
            <br/>
            <h4 className="vertical-timeline-element-subtitle">Sydney, NSW</h4>
            <p style={{ color: "#eae7dc" }}>
              User Experience, Visual Design
            </p>
            <span style={{ color: "#eae7dc" }}>
              Wordpress, PHP, Photoshop
            </span>
          </VerticalTimelineElement>
        </VerticalTimeline>

      </div>
      
    </section>
   );
}
 
export default Experience;