import React from 'react';
import Image from 'next/image';
import IoS from '../../public/images/iosdownload.svg';
import Android from '../../public/images/androidownload.svg';
const Hero = (props) => {
    return (
        <div className="col-md-12 herosection">
            <div className="col-md-6 herotextarea">
                <div className="hero-title-text">
                    Digital dollars for Africans everywhere.
                </div>
                <div className="hero-sub-text">
                    Send and recieve digital dollars with anyone anywhere, make online payments and earn yield.
                </div>
                <div className="sendlinkform">
                    <div>
                        
                        <input type="tel" placeholder="Enter your phone number"/>
                    </div>
                    <button type="button">Text me the link</button>
                </div>
                <div className="downloadbuttons">
                    <Image src={Android}/>
                    <Image className="ios" src={IoS}/>
                </div>
                <div className="hero-smalltext">
                    No government ID required to get started.
                </div>
            </div>
            <div className="col-md-6 hero-image">
                <img src="/images/hero-img.svg"/>
            </div>
        </div>
    )
}
export default Hero;