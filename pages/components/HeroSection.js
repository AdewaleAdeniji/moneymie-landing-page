import React from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
const Hero = (props) => {
    return (
        <div className="col-md-12 herosection">
            <Bounce left>
                <div className="col-md-6 herotextarea">
                
                <div className="hero-title-text">
                    Digital dollars for Africans everywhere.
                </div>
                <div className="hero-sub-text">
                    Send and recieve digital dollars with anyone anywhere, make online payments and earn yield.
                </div>
                <div className="sendlinkform">
                    <div className="inputarea">
                        
                        <div className="options">
                            <div className="chosenflag">
                                <img src="/images/ngaflag.png"/>
                            </div>
                            <i className="fa fa-angle-down"></i>
                        </div>
                            <input type="tel" placeholder="Enter your phone number"/>
                    </div>
                    <button type="button">Text me the link</button>
                </div>
                <div className="downloadbuttons">
                    <img src="/images/androidownload.svg"/>
                    <img className="ios" src="/images/iosdownload.svg"/>
                </div>
                <div className="hero-smalltext">
                    No government ID required to get started.
                </div>
            </div>
            </Bounce>
            <div className="col-md-6 hero-image">
                <Fade right>
                    <div className="img-section">
                        {/* <img src="/images/loop.gif" className="loop"/> */}
                        <img src="/images/hero-img.svg" className="heroimg"/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default Hero;