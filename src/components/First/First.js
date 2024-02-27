import React from 'react'
import './First.css';
import Countdown from '../Bg/coutndown';
import Dots from '../Bg/dot';

function First() {
  return (
    <div className="First_main">
    <div className='up'>
        <div className='lft'>
            <div className='logo'>
            <img src={require("./makeathon-logo.png")} id="bigl" alt="Logo" />
            </div>
            <div className='regbut'>
            <button class="cssbuttons-io-button">
            Register Now!
            <div class="icon">
                <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                ></path>
                </svg>
            </div>
            </button>
            <Countdown></Countdown>
            </div>
        </div>
        <div className='right'>
            <Dots></Dots>
        </div>
    </div>
    </div>
  );
}

export default First;
