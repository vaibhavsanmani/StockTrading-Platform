import React from 'react'

function Footer() {
    return (  
        <footer className='pt-4 pb-4' style={{backgroundColor:"#535252"}}>
        <div className="container mt-5 mb-5 footerBack" >
            <div className="row">
                <div className="col">
                    <a className="navbar-brand" href="#">
                        <img src="media/images/logo.svg" alt="Logo" style={{width:"50%"}}/>
                    </a>

                    <p className="mt-4 " style={{width:"95%",fontSize:"14px"}} >
                        © 2010 - 2026, Zerodha Broking Ltd.<br/>
                        All rights reserved.
                    </p>

                    <div className="media">
                        <i className="fa-brands fa-x-twitter "></i>
                        <i className="fa-brands fa-facebook "></i>
                        <i className="fa-brands fa-instagram "></i>
                        <i className="fa-brands fa-linkedin "></i>
                    </div>

                    <hr/>

                    <div className="media">
                        <i className="fa-brands fa-youtube "></i>
                        <i className="fa-brands fa-whatsapp "></i>
                        <i className="fa-brands fa-telegram "></i>
                    </div>

                    <div className="d-flex gap-3 mt-4">
                        <img src="media/images/googlePlayBadge.svg" style={{maxHeight:"50px"}} alt="Google Play"/>
                        <img src="media/images/appstoreBadge.svg" style={{maxHeight:"50px"}} alt="App Store"/>
                    </div>
                </div>

                <div className="col">
                    <h4 className='mb-4'>Account</h4>
                    <a href="#" className=' d-block'>Open Demat account</a>
                    <a href="#" className=' d-block'>Minor demat account</a>
                    <a href="#" className=' d-block'>NRI demat account</a>
                    <a href="#" className=' d-block'>HUF demat account</a>
                    <a href="#" className=' d-block'>Commodity</a>
                    <a href="#" className=' d-block'>Dematerialisation</a>
                    <a href="#" className=' d-block'>Fund transfer</a>
                    <a href="#" className=' d-block'>MTF</a>
                </div>

                <div className="col">
                    <h4 className='mb-4'>Support</h4>
                    <a href="#" className=' d-block'>Contact us</a>
                    <a href="#" className=' d-block'>Support portal</a>
                    <a href="#" className=' d-block'>How to file a complaint?</a>
                    <a href="#" className=' d-block'>Status of your complaints</a>
                    <a href="#" className=' d-block'>Bulletin</a>
                    <a href="#" className=' d-block'>Circular</a>
                    <a href="#" className=' d-block'>Z-Connect blog</a>
                    <a href="#" className=' d-block'>Downloads</a>
                </div>

                <div className="col">
                    <h4 className='mb-4'>Company</h4>
                    <a href="#" className=' d-block'>About</a>
                    <a href="#" className=' d-block'>Philosophy</a>
                    <a href="#" className=' d-block'>Press & media</a>
                    <a href="#" className=' d-block'>Careers</a>
                    <a href="#" className=' d-block'>Zerodha Cares (CSR)</a>
                    <a href="#" className=' d-block'>Zerodha.tech</a>
                    <a href="#" className=' d-block'>Open source</a>
                    <a href="#" className=' d-block'>Referral program</a>
                </div>

                <div className="col">
                    <h4 className='mb-4'>Quick links</h4>
                    <a href="#" className=' d-block'>Upcoming IPOs</a>
                    <a href="#" className=' d-block'>Brokerage charges</a>
                    <a href="#" className=' d-block'>Market holidays</a>
                    <a href="#" className=' d-block'>Economic calendar</a>
                    <a href="#" className=' d-block'>Calculators</a>
                    <a href="#" className=' d-block'>Markets</a>
                    <a href="#" className=' d-block'>Sectors</a>
                    <a href="#" className=' d-block'>Gift Nifty</a>       
                </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;