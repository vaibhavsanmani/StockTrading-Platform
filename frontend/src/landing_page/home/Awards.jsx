import React from 'react'
function Awards() {
    return ( 
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6 p-5">
                        <img src='media/images/largestBroker.svg'/>
                    </div>
                    <div className="col-6 p-5">
                        <h2>Largest Broker in India</h2>
                        <p>We are the largest stock broker in India, with over 5 million clients and a strong presence in the market.</p>
                        
                        <div className="row">
                            <div className="col-6">
                                <ul className='mt-4'>
                                    <li>
                                        <p>feature and options</p>
                                    </li>
                                    <li>
                                        <p>Comodity Directives</p>
                                    </li>
                                    <li>
                                        <p>Currency Directives</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className='mt-4'>
                                    <li>
                                        <p>Stocks & IPO</p>
                                    </li>
                                    <li>
                                        <p>Direct Mutual funds</p>
                                    </li>
                                    <li>
                                        <p>Bonds and Govt. Securities</p>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>         
                        <img src='media/images/pressLogos.png' style={{width:"95%"}}/>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Awards;