import React from 'react';

function Education({ data }) {
  return (
    <div className="section">
      <div className="flex-row">
        <div className="section-title">Education</div>
        <div className="section-content">
          {data.map((edu, index) => (
            <div key={index}>
              <h3>{edu.institution}</h3>
              <p>{edu.degree}</p>
              <p>{edu.years}</p>
              <p>GPA: {edu.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
