import React from 'react';

function Skills({ data }) {
  return (
    <div className="section">
      <div className="flex-row">
        <div className="section-title">Key Skills</div>
        <div className="section-content skills">
          {data.map((skill, index) => (
            <div key={index}>{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
