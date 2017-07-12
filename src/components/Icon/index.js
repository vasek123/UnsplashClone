import React from 'react';
import PropTypes from 'prop-types';

import './Icon.css';

const Icon = ({ name, style, color }) => (
  <i className={`Icon fa fa-${name}`} style={{...style, color }} />
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
}

Icon.defaultProps = {
  style: {},
  color: '#000',
}

export default Icon;
