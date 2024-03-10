import React from 'react'; 
import './About.css'; 
 
const About = () => { 
  const teamMembers = [ 
    { name: 'MADHUSREE.K', email: 'madhu@example.com', role: 'Lead Developer', description: 'Responsible for front-end and back-end development' }, 
    { name: 'HARSHITHA.M', email: 'harshi@example.com', role: 'UI/UX Designer', description: 'Designs user interfaces and user experience for the application' }, 
    { name: 'MEGHANA.M', email: 'maggie@example.com', role: 'Marketing Manager', description: 'Leads the marketing efforts and user acquisition strategies' } 
  ]; 
 
  return ( 
    <div className="about-us-section"> 
      <h2>About Us: Our Team</h2> 
      <div className="team-members"> 
        {teamMembers.map((member, index) => ( 
          <div key={index} className="team-member"> 
            <h3>{member.name}</h3> 
            <p><strong>Role:</strong> {member.role}</p> 
            <p><strong>Email:</strong> {member.email}</p> 
            <p>{member.description}</p> 
          </div> 
        ))} 
      </div> 
      <h2>An online exam portal is a web-based platform designed to facilitate the administration, delivery, and grading of exams or assessments over the internet. These portals are commonly used by educational institutions, businesses, and certification bodies to conduct exams remotely, allowing participants to take tests from anywhere with internet access.</h2>
    </div> 
  ); 
}; 
 
export default About;
