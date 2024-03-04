import React from 'react';
import './App.css'; // Import your CSS file for styling

// Sample achievement data
const achievementsData = [
  { title: 'Robofest Competition', description: 'Level 1 Winner: Secured victory in Level 1 by presenting the best ideation and awarded a prize money of INR Rs. 50,000. ' },
  { title: 'Robofest Competition', description: 'Level 2 Winner: Emerged victorious in Level 2 by successfully submitting and gaining approval for the proof of concept, leading to prototype development and a prize money of Rs. 2,00,000' },
  { title: 'IRC League Competition ', description: 'Participated actively in the IRC League, a competitive programming platform fostering collaborative problem-solving and algorithmic challenges. ' },

  { title: ' Autocaplypse Robocalypse 2018 ', description: 'Demonstrated a robotic arm controlled by a joystick, utilizing Arduino-based technology. This innovative feature enhanced the functionality and versatility of the robotic system, allowing for precise and intuitive control during various tasks and challenges. ' },


  // Add more achievement data as needed
];

// Individual achievement component
const Achievement = ({ title, description }) => (
  <div className="achievement-box">
    <h3 className="achievement-title">{title}</h3>
    <p>{description}</p>
  </div>
);

// Achievements page component
function AchievementsPage() {
  return (
    <div className="achievements-page">
      <h1>Achievements and Participations</h1>
      <div className="achievements-grid">
        {achievementsData.map((achievement, index) => (
          <Achievement
            key={index}
            title={achievement.title}
            description={achievement.description}
          />
        ))}
      </div>
    </div>
  );
}

export default AchievementsPage;
