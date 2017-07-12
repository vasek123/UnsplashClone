import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchBox.css';

import Icon from '../Icon';

const iconStyle = {
  fontSize: '18px',
  position: 'relative',
  top: '1px',
  right: '6px',
}

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      input: '',
    }
  }
  
  onChange(input) {
    this.setState({ input });
  }

  setFocus(focused) {
    this.setState({ focused });
  }

  render() {
    return (
      <div className={`SearchBox ${this.state.focused ? 'active' : ''}`}>
        <Icon name="search" color="#999" style={iconStyle} />
        <input
          type="text"
          placeholder="Search free high-resolution photos"
          value={this.state.input}
          onChange={(e) => this.onChange(e.target.value)}
          onFocus={() => this.setFocus(true)}
          onBlur={() => this.setFocus(false)}
        />
      </div>
    )
  }
}

export default SearchBox;
