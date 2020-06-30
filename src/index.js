import React from 'react';

import './App.css';


function PixelPureCssXWing(height,width,rotation) {
  return (
    <div className="x-wing-pixel" style={{height:`${height?height:'300px'}`,width:`${width?width:'300px'}`}}>
    <div className="rotate" style={{transform: `rotate(${rotation?rotation:''})`}}>
    <div className="x-wing" >
      <Body />
      <Extras />
      <Decoration />
    </div>
    </div>
  </div>
  );
}

export default PixelPureCssXWing;
