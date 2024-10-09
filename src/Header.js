import React from 'react';

function Header({ data }) {
  return (
    <div className="header">
      <div className="header-left">
        <h1>{data.name}</h1>
        <p>{data.title}</p>
      </div>
      <div className="header-right">
        <p>Email: <a href={`mailto:${data.email}`}>{data.email}</a></p>
        <p>Website: <a href={`http://${data.website}`} target="_blank" rel="noopener noreferrer">{data.website}</a></p>
        <p>Mobile: {data.mobile}</p>
      </div>
    </div>
  );
}

export default Header;
