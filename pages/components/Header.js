import React,{useState} from 'react';
import Logo from '../../public/images/logo.svg';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

const HeaderNavBar = (props) => {

    const [mobilemenu, setMobile] = useState(false);
    
    const toggleMenu = (e) => {
        setMobile(!mobilemenu);
    }   
    const handleToggle = (event) => {
        if(event.target===event.currentTarget){
            toggleMenu();
        }
    }
    return (
        <>
        <Fade top>
        <div className="nav navbar navdesktop">
            {/* <Image src={Logo} alt="Moneymie Logo"/> */}
            <img src="images/logo.svg" className="navlogo" alt="Moneymie Logo"/>
            <div className="align-right navlinks">
                <a href="blog">Blog</a>
                <a href="#">Get Moneymie for Business</a>
            </div>
        </div>
        <div className="nav navbar mobilenav">
            
            <img src="images/logo.svg" className="navlogo" alt="Moneymie Logo"/>
            <div className="align-right navlinks">
                <button className="menubtn" onClick={toggleMenu.bind(this)}>
                    <i className="fa fa-bars"></i>
                </button>
            </div>
        </div>
        </Fade> 
        <div className={mobilemenu ? 'navmobile' : 'hidden' } onClick={handleToggle.bind(this)}>
                <div className="navcontents">
                            <header>
                                <img   src='images/logo.svg' alt="Moneymie Logo"/>
                                <i className="fa fa-times" onClick={toggleMenu.bind(this)}></i>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://medium.com/moneymie" target="_blank"  rel="noopener noreferrer">
                                            Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="https://moneymie.link/usdcpay" target="_blank"  rel="noopener noreferrer">
                                            Get Moneymie for Business <i className="fa fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
            </div>
            
        
        </>
    )
}
export default HeaderNavBar;