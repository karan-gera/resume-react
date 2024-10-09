import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

function App() {
  const [resumeData, setResumeData] = useState({
    header: {
      name: "Zh Rimel",
      title: "Data Scientist",
      email: "abc@gmail.com",
      website: "abc.github.io/abc",
      mobile: "01234567890",
    },
    personalProfile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    workExperience: [
      {
        title: "Job Title at Company",
        duration: "August 2022 – December 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
      {
        title: "Job Title 2 at Company 2",
        duration: "August 2020 – December 2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
    ],
    skills: ["A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill"],
    education: [
      {
        institution: "New Jersey Institute of Technology",
        degree: "BS in Computer Science",
        years: "2018 - 2022",
        gpa: 3.9,
      },
      {
        institution: "New Jersey Institute of Technology",
        degree: "MS in Data Science",
        years: "2022 - 2023",
        gpa: 4.0,
      },
    ],
  });

  return (
    <div className="App">
      <Header data={resumeData.header} />
      <PersonalProfile data={resumeData.personalProfile} />
      <WorkExperience data={resumeData.workExperience} />
      <Skills data={resumeData.skills} />
      <Education data={resumeData.education} />
    </div>
  );
}

export default App;
