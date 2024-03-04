// ProjectsPage.js

import React from 'react';
import './App.css'; // Import your CSS file for styling

// Sample project data
const projectsData = [
  { title: 'Track Management System', description: 'Web portal for track competitions/hackathons where participants submit solutions, evaluated on metrics with a leaderboard. Created userfriendly website to showcase problem-solving skills. ' },
  { title: 'Self-Balancing Robot for Robofest Competition ', description: 'Built a self-balancing robot for the Robofest competition. Built a free-standing robot using gyroscope and feedback control, showcasing intelligent line-following capabilities. Successfully carried a 1 kg load over 200 meters. Strengthened skills in robotics, control systems, and teamwork. ' },
  { title: 'LPG Gas Leakage Detector', description: 'Developed an Arduino-based LPG gas leakage detection system. Integrated sensors to accurately detect LPG gas leaks in real-time. Upon detection, the system triggers LED blinking and activates a buzzer for immediate alerting, ensuring safety measures are promptly taken.' },
  // Add more project data as needed
  { title: 'District Management System ', description: 'Developed an efficient District Management System to track and resolve user complaints across districts. Implemented features for complaint tracking, citizen data management, and feedback collection to enhance efficiency in administrative processes. ' },
  { title: 'Color Sorter', description: 'Developed a color sorting system capable of categorizing items based on their colors. The color sorter efficiently categorizes items based on their colors, making it ideal for industrial and manufacturing applications where precise sorting is crucial. ' },
  { title: 'KAVACH - Advanced Soldier Communication System', description: 'Led the development of KAVACH, an advanced soldier communication system funded by GUJCOST, Government of Gujarat. This pioneering initiative leverages futuristic flexible electronics to enable seamless communication among soldiers in warfare zones, overcoming limitations of traditional networks. With real-time monitoring capabilities, KAVACH enhances troop safety and operational efficiency, revolutionizing modern warfare strategies.' },
  { title: 'Arduino Temperature Detector', description: 'The Arduino Temperature Detector with DHT11 Sensor is a versatile and practical project designed to monitor temperature and humidity levels in real-time. Utilizing the DHT11 sensor, the Arduino microcontroller system accurately captures environmental data and provides meaningful insights for various applications ' },
  { title: 'Arduino Breathalyzer', description: 'Developed a alcohol detecting system using Arduino and an MQ-3 alcohol sensor interfaced with an OLED display. Aimed at real-time Blood Alcohol Concentration (BAC) measurement, the system ensured seamless integration for accurate readings and intuitive user interaction. Conducted thorough testing to validate reliability and accuracy, contributing to enhanced safety measures and showcasing proficiency in sensor integration and microcontroller programming.' },
  // Add more project data as needed
];

// Individual project component
const Project = ({ title, description }) => (
  <div className="project-box">
    <h3 className="project-title">{title}</h3>
    <p>{description}</p>
  </div>
);


// Projects page component
function ProjectsPage() {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
