import React from 'react';

const Logo = () => {
  return (
    <div className='logo-box'>
      <img
        className='logo'
        src={require('../../images/logo-white.png')}
        alt='logo'
      />
    </div>
  );
};

export default Logo;
