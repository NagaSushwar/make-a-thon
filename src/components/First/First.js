import React from 'react'
import './First.css';
import Countdown from '../Bg/coutndown';
import Dots from '../Bg/dot';

function First() {
  return (
    <div class="container">
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
        <svg width="808" height="1080" viewBox="0 0 1008 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M385 1080L1159 975V1080H385Z" fill="url(#paint0_linear_37_269)"/>
        <path d="M0.520998 -62.2038L97.271 -62.2038L641.771 1193.14L398.771 1193.14L0.520998 -62.2038Z" fill="url(#paint1_linear_37_269)"/>
        <defs>
        <linearGradient id="paint0_linear_37_269" x1="625" y1="1080" x2="1198" y2="1027.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B98B27" stop-opacity="0.6"/>
        <stop offset="1" stop-color="#DEA31F"/>
        </linearGradient>
        <linearGradient id="paint1_linear_37_269" x1="58.1551" y1="-70.9352" x2="534.594" y2="1232.32" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DEA31F" stop-opacity="0.4"/>
        <stop offset="1" stop-color="#B98B27"/>
        </linearGradient>
        </defs>
        </svg>
        </div>
    </div>
    </div>

  );
}

export default First;
