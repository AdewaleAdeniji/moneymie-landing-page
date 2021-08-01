import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Download = (props) => {
    return (
        <Fade right>
        <div className="downloadsection">
            <Fade top>
                <div className="downloadtext">
                    Thousands of people are already saving more with moneymie. Secure your bag. Sign up now.
                </div>
            </Fade>
            
            <div className="downloadbuttons">
                <Fade left>
                    <img src="/images/androidownload.svg"/>
                </Fade>
                <Fade right>
                    <img className="ios" src="/images/iosdownload.svg"/>
                </Fade>
            </div>
        </div>
        </Fade>
    )
}
export default Download;