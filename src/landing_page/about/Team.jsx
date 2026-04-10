import React from 'react'
function Team() {
    return ( 
         <div className="container">
            <div className="row">
                <h4 className=' mb-5 text-center'>People</h4>
                <div className="col-1"></div>
                <div className="col-5 text-center">
                   <img src="media/images/nithinKamath.jpg" style={{width:"65%",borderRadius:"50%"}}/>
                   <h4 className='mt-4'>Nitin Kamath</h4>
                   <p className='text-muted mt-3'>Founder, CEO</p>
                </div>
                <div className="col-5 people" >
                    <p >Nithin bootstrapped and founded Zerodha in 2010 to overcome the<br/> 
                        hurdles he faced during his decade long stint as a trader. Today,<br/> 
                        Zerodha has changed the landscape of the Indian broking industry. <br/>
                    </p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee<br/> 
                        (SMAC) and the Market Data Advisory Committee (MDAC).<br/> 
                    </p>
                    <p>Playing basketball is his zen.<br/> </p>

                    <p className='mb-5'>Connect on&nbsp; 
                        <a href="/"  style={{textDecoration:"none"}}>Homepage</a> 
                         / <a href="/"  style={{textDecoration:"none"}}>TradingQnA</a> 
                         / <a href="/"  style={{textDecoration:"none"}}>Twitter</a><br/> </p>
                    
                </div>
                <div className="col-1"></div>
            </div>
        </div>
     );
}

export default Team;