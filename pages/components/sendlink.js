import React,{useEffect, useState} from 'react';
import Fade from 'react-reveal/Fade';
import Joi from 'joi';
import Swal from 'sweetalert2'
// import toastr from 'toastr';
import { countries,getEmojiFlag } from 'countries-list';
import $ from "jquery";
import ShowToast from './toast';
import { countrieslist } from './countries';
// import { message } from 'statuses';
const SendLinkForm = (props) => {
    // console.log(JSON.stringify(countries));
    // console.log(countrieslist);
    const [countrys,setCountries] = useState(countrieslist);
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
    useEffect(()=>{
        document.body.addEventListener('click',(e)=>{
            // setSelect(false);
            const arr = e.target.classList;
            arr.forEach((classname)=>{
                console.log(classname)
                if(classname=='chosenflag'||classname=='fa-angle-down'||classname=='options'){
                    setSelect(true);
                }
                else {
                    setSelect(false);
                }
            })
            console.log(e.target.classList);
        })

    },[])
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
    if(usernumber.length<6){
        setActiveButton(false);
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
    const handleClickCountry = (e) => {
        let countrydata = e.target.attributes.getNamedItem('data-country').value;
        let country = e.target.attributes.getNamedItem('data-val').value;
        // console.log(countrydata,val);
        setSelect(false);
        var countryarray = country.split(":");
        var phonecode = "+"+countryarray[0];
        var countrycode = (countryarray[1]).toLowerCase();
        setPhoneCode(phonecode);
        setCountryCode(countrycode);
    }
    const handleCountries = (country) => {
        setSelect(true);
        // document.getElementById("selectcountry").click();
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
        <Fade bottom>
            <div className="sendsection">
            <div className="sendwrapper">
                <div className="sendtitle">
                    Start banking without borders today.  
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
                            
                            <div className="selectcountrydropdown">
                            {
                                    Object.keys(countrys).map((country,index)=>{
                                        const countrydetails = countrys[country];
                                        const name = countrydetails.name;
                                        const phonecode = countrydetails.phone;
                                        const val = phonecode+":"+country;
                                        
                                        return (
                                            
                                            <div className="selectoption" key={index} data-country={index} data-val={val} onClick={handleClickCountry}>
                                                    {name} 
                                            </div>
                                        )
                                    })
                                } 
                                
                                
                            </div>
                        </div>
                        </Fade>
                    </div>
                    
                <button type="button" className={active ? 'active' : ''} onClick={SendSMS}>{loading ? 'Sending...' : 'Text me the link'}</button>
                </div>
            </div>
            {/* <div id="toast-container" class="toast-bottom-center">
                <div class="toast toast-success" aria-live="polite">
                    <div class="toast-message">
                        Hello World
                    </div>
                </div>
            </div> */}

        </div>
        <ShowToast message={toastMessage} type={toastType} show={showtoast}/>
        </Fade>
    )
}
export default SendLinkForm;