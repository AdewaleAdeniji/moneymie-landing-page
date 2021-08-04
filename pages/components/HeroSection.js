import React,{useState} from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Joi from 'joi';
import Swal from 'sweetalert2'
import { countries,getEmojiFlag } from 'countries-list';
import ShowToast from './toast';
const Hero =  (props) => {
    // console.log(countries);
    // console.log(getEmojiFlag(1));
    const [countrys,setCountries] = useState(countries);
    const [usernumber,setPhoneNumber] = useState('');
    const [error,setError] = useState(false);
    const [active,setActiveButton] = useState(false);
    const [loading,setLoading] = useState(false)
    const [phoneCode,setPhoneCode] = useState("+234");
    const [countryCode,setCountryCode] = useState("ng");
    const [showSelect,setSelect] = useState(false);
    const [showtoast,setToast] = useState(false);
    const [toastMessage,setMessage] = useState('');
    const [toastType,setToastType] = useState(false);
    // console.log(countrys);
    // console.log(typeof(countrys));
    const HandleNumberChange = async (e) => {
        setPhoneNumber(e.target.value);
        const usernum = e.target.value=='' ? '' : e.target.value
        const number = Joi.number();
        try {
            if(usernum!=''){
                await number.validateAsync(usernum)
                setPhoneNumber(usernum);
                // console.log('here');
                setActiveButton(true);
            }
        }
        catch(err){
            setActiveButton(false);
            setError(true);
            inform('Please ensure your input contains valid phone number',true)
        }
        
    }
    const inform = (message,type) => {
        setToast(true);
        setToastType(type ? type : false);
        setMessage(message);
        // Swal.fire({
        //     icon: type ? 'error' : 'success',
        //     text:message,
        //     showConfirmButton:false
        // })
        setInterval(()=>{
            setToast(false);
        },5000)
    }
    const SendSMS = (props) => {
        // console.log(usernumber.length)
        if(usernumber.length<6){

        }
        else if(usernumber!=''&&usernumber.indexOf("+")<0){
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
        "phone": phoneCode+usernumber,
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
                setPhoneNumber('');
                setActiveButton(false);
            }
            else {
                throw result.message;
            }
        })
        .catch(error =>{
            setLoading(false);  
            inform("Error Occured",true)
        });
        }
        else {
            inform("Please fill in your number and ensure remove your country code",true);
        }
    }
    const handleCountries = (country) => {
        setSelect(true);
    }
    const countryChange = (e) => {
        let country = e.target.value;
        setSelect(false);
        var countryarray = country.split(":");
        var phonecode = "+"+countryarray[0];
        var countrycode = (countryarray[1]).toLowerCase();
        setPhoneCode(phonecode);
        setCountryCode(countrycode);
    }
    return (
        <>
        <div className="col-md-12 herosection">
            <Bounce left>
                <div className="col-md-6 herotextarea">
                
                <div className="hero-title-text">
                    Digital dollars for Africans everywhere.
                </div>
                <div className="hero-sub-text">
                    Send and receive digital dollars with anyone anywhere, make online payments and earn yield.
                </div>
                <div className="sendlinkform">
                    <div className="inputarea">
                        
                        <div className="options" onClick={handleCountries}>
                            <div className="chosenflag">
                                <img src={`https://flagcdn.com/48x36/${countryCode}.png`}  width="16" height="12"/>
                            </div>
                            <i className="fa fa-angle-down"></i>
                        </div>
                            <input type="number" placeholder="Enter your phone number" value={usernumber} onChange={HandleNumberChange}/>
                        <Fade top>
                        <div className={showSelect ? "countrydropdown" : 'hidden'}>
                            <select className="select" onChange={countryChange}>
                                {
                                    Object.keys(countrys).map((country,index)=>{
                                        const countrydetails = countrys[country];
                                        const name = countrydetails.name;
                                        const phonecode = countrydetails.phone;
                                        const val = phonecode+":"+country;
                                        return (
                                            <option value={val} key={index}>{name}</option>
                                        )
                                    })
                                }    
                            </select>
                        </div>
                        </Fade>
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
        <ShowToast message={toastMessage} type={toastType} show={showtoast}/>
        </>
    )
}
export default Hero;