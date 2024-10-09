import React from 'react';

function PersonalProfile({ data }) {
  return (
    <div className="section">
      <div className="flex-row">
        <div className="section-title">Personal Profile</div>
        <div className="section-content">
          <p>{data}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalProfile;
