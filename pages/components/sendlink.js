import React from 'react';
import Fade from 'react-reveal/Fade';

const SendLinkForm = (props) => {
    return (
        <Fade bottom>
            <div className="sendsection">
            <div className="sendwrapper">
                <div className="sendtitle">
                    Start banking without borders today.  
                </div>
                <div className="sendlinkform">
                        <div>
                            
                            <input type="tel" placeholder="Enter your phone number"/>
                        </div>
                        <button type="button">Text me the link</button>
                    </div>
            </div>
        </div>
        </Fade>
    )
}
export default SendLinkForm;