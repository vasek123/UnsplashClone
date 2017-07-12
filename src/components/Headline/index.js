import React from 'react';

import './Headline.css';

const Headline = ({ children, style }) => (
  <h1 className="headline" style={style}>{children}</h1>
)

export default Headline;
