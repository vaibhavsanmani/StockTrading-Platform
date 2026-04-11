import React from 'react'

function Hero() {
    return (  
        <div className="container">
            <div className='mt-5 p-5 text-center'>
                <h2>Charges</h2>
                <p className="mb-5 text-muted">List of all charges and taxes</p>
                <hr/>
            </div>
            <div className="row">
                <div className="col-4 p-5">
                    <img src='media/images/pricing0.svg'/>
                    <h3 className='text-center'>Free equity delivery</h3>
                    <p className='text-center text-muted'>All equity delivery investments (NSE, BSE), 
                                                            are absolutely free — ₹ 0 brokerage.
                    </p>
                    
                </div>
                <div className="col-4 p-5">
                    <img src='media/images/pricingEquity.svg'/>
                    <h3 className='text-center'>Intraday and F&O trades</h3>
                    <p className='text-center text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per 
                                                          executed order on intraday trades across equity, 
                                                          currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className="col-4 p-5">
                    <img src='media/images/pricingMF.svg'/>
                    <h3 className='text-center'>Free direct MF</h3>
                    <p className='text-center text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & 
                                                          DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;