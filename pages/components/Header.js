import React from 'react';
import Logo from '../../public/images/logo.svg';
import Image from 'next/image';
const HeaderNavBar = (props) => {
    return (
        <div className="nav navbar navdesktop">
            {/* <Image src={Logo} alt="Moneymie Logo"/> */}
            <img src="images/logo.svg"/>
            <div className="align-right navlinks">
                <a href="blog">Blog</a>
                <a href="#">Get Moneymie for Business</a>
            </div>
        </div>
    )
}
export default HeaderNavBar;