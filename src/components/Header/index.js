import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Header.css';

import Logo from '../Logo';
import SearchBox from '../SearchBox';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="Header">
        <nav>
          <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
            <Logo style={{ paddingLeft: 0, paddingRight: 18 }} />
            <SearchBox />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
