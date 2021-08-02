import React,{useState} from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Joi from 'joi';
import Swal from 'sweetalert2'

const Hero =  (props) => {
    const [usernumber,setPhoneNumber] = useState(0);
    const [error,setError] = useState(false);
    const [active,setActiveButton] = useState(false);
    const [loading,setLoading] = useState(false)
    const HandleNumberChange = async (e) => {
        const usernum = e.target.value=='' ? '' : e.target.value
        const number = Joi.number();
        try {
            if(usernum!=''){
                await number.validateAsync(usernum)

            }
            setPhoneNumber(usernum);
            // console.log('here');
            setActiveButton(true);
        }
        catch(err){
            setActiveButton(false);
            setError(true);
            inform('Please ensure your input contains valid phone number',false);
        }
        
    }
    const inform = (message,type) => {
        Swal.fire({
            icon:type ? 'error' : 'success',
            text:message,
            showConfirmButton:false
        })
    }
    const SendSMS = (props) => {
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "phone": "234"+usernumber,
        "country": "NGN"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        setLoading(true);
        fetch("https://staging.moneymie.com/api/v2/public/route/sendDownloadLink", requestOptions)
        .then(response => response.json())
        .then(result => {
            setLoading(false);

            if(result.code==100&&result.status){
                inform("Download link sent to your number");
            }
            else {
                throw result.message;
            }
        })
        .catch(error =>{
            setLoading(false);
            inform("Error Occured",false);
        });
    }
    
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
                            <input type="number" placeholder="Enter your phone number" onChange={HandleNumberChange}/>
                    </div>
                    <button type="button" className={active ? 'active' : ''} onClick={SendSMS}>{loading ? 'Sending...' : 'Text me the link'}</button>
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