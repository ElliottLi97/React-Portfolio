import React, { useState } from 'react';
import Navbar from './NavBar';
import AboutMe from './AboutMe';
import BottomNav from './BottomNav';
import Bucket from './Bucket';

function BucketList() {

  return (
    <div>
      <Navbar/>
      <AboutMe/>
      <BottomNav/>
    </div>
  );
}

export default BucketList;
