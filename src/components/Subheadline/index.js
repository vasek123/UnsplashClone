import React from 'react';
import PropTypes from 'prop-types';

import './Subheadline.css';

const Subheadline = ({ children }) => (
  <h2 className="Subheadline">{children}</h2>
)

Subheadline.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Subheadline;
