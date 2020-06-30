import React from 'react';
// import './body.scss'
import '../../App.css'

const Decoration = () => {
    return(
      <div>
        <div className="wing-decor wd-left ">
          <div className="wd-one"/>
          <div className="wd-two" />
          <div className="wd-three" />
          <div className="wd-four"/>
          <div className="wd-five"/>
        </div>
        <div className="wing-decor wd-right flip-horizontal ">
          <div className="wd-one"/>
          <div className="wd-two" />
          <div className="wd-three" />
          <div className="wd-four"/>
          <div className="wd-five"/>
        </div>
        <div className="side-stripes">
          <div className="stripes  left-stripes">
            <div className="stripes-big" />
            <div className="stripes-medium" />
            <div className="stripes-small" />
          </div>
          <div className="stripes right-stripes">
            <div className="stripes-big" />
            <div className="stripes-medium" />
            <div className="stripes-small" />
          </div>
        </div>
        <div className="body-art  ">
          <div className="ba-blank-one"/> 
          <div className="ba-one"/>
          <div className="ba-blank-two"/> 
          <div className="ba-two" />
          <div className="ba-blank-three"/> 
          <div className="ba-three" />
          <div className="ba-blank-four"/> 
          <div className="ba-four"/>
        </div>
      </div>
    )
}


export default Decoration;