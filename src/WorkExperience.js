import React from 'react';

function WorkExperience({ data }) {
  return (
    <div className="section">
      <div className="flex-row">
        <div className="section-title">Work Experience</div>
        <div className="section-content">
          {data.map((job, index) => (
            <div className="job" key={index}>
              <h3>{job.title} ({job.duration})</h3>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
