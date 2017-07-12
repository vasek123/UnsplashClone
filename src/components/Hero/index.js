import React from 'react';

import './Hero.css';

import Headline from '../Headline';
import Subheadline from '../Subheadline';

const Hero = () => (
  <div className="Hero">
    <Headline style={{ marginTop: 0, marginBottom: '16px' }}>Unsplash</Headline>
    <div>
      <Subheadline>
        Beautiful, free photos.<br />Gifted by the world’s most generous community of photographers. 🎁
      </Subheadline>
    </div>
  </div>
)

export default Hero;
