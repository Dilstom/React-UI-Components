import React from 'react';
import './Header.css';
import LogoL from './ImageThumbnail';

const Title = () => {
 return (
  <div className="flexDiv">
   <LogoL />
   <p className="title">Lambda School</p>
   <p>@LambdaSchool * 26 jan</p>
  </div>
 );
};

export default Title;
