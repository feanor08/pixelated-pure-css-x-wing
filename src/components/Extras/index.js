import React from 'react';
// import './body.scss'
import '../../App.css'

const Extras = () => {
    return(
        <div>
        <div className="side-thruster left-thruster">
          <div className="st-one " />
          <div className="st-separator" />
          <div className="st-two " />
          <div className="st-three " />
        </div>
        <div className="side-thruster right-thruster">
          <div className="st-one " />
          <div className="st-separator" />
          <div className="st-two " />
          <div className="st-three " />
        </div>
        <div className="cannon left-cannon ">
          <div className="can-one can-top-left"/>
          <div className="can-blank " />
          <div className="can-blank  " />
          <div className="can-two"/>
          <div className="can-blank  " />
          <div className="can-two"/>
          <div className="can-blank " />
          <div className="can-two"/>
        </div>
        <div className="cannon right-cannon ">
          <div className="can-one can-top-right"/>
          <div className="can-blank " />
          <div className="can-blank  " />
          <div className="can-two"/>
          <div className="can-blank  " />
          <div className="can-two"/>
          <div className="can-blank " />
          <div className="can-two"/>
        </div>
        </div>
    )
}


export default Extras;