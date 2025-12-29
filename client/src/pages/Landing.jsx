import React from 'react'
import LandingLeft from '../components/landing/LandingLeft';
import LandingRight from '../components/landing/LandingRight';
import AuthLayout from '../layouts/AuthLayout';

const Landing = () => {
  return (
    <AuthLayout
      left={<LandingLeft />}
      right={<LandingRight />}
    />
  );
}

export default Landing
