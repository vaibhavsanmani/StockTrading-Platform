import React from 'react'
function Hero() {
    return ( 
        <div className="container">
            <h4 className='mt-5 mb-5 text-muted'style={{textAlign:"center"}}>We pioneered the discount broking model in India.<br/>
            Now, we are breaking ground with our technology.</h4>
            <hr></hr>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                    <p className='mt-5 '>We kick-started operations on the 15th of August, 2010<br/> 
                        with the goal of breaking all barriers that traders and<br/> 
                        investors face in India in terms of cost, support, and <br/>
                        technology. We named the company Zerodha, a <br/>
                        combination of Zero and "Rodha", the Sanskrit word for <br/>
                        barrier.
                    </p>
                    <p>Today, our disruptive pricing models and in-house<br/> 
                        technology have made us the biggest stock broker in<br/> 
                        India. <br/>
                    </p>
                    <p className='mb-5'>Over 1.6+ crore clients place billions of orders every year<br/> 
                        through our powerful ecosystem of investment<br/> 
                        platforms, contributing over 15% of all Indian retail<br/>
                        trading volumes.<br/>
                    </p>
                </div>
                <div className="col-5">
                    <p className='mt-5 '>In addition, we run a number of popular open online<br/> 
                       educational and community initiatives to empower retail<br/> 
                        traders and investors. <br/>
                    </p>
                    <p><a style={{textDecoration:"none",}} href="https://www.rainmatter.com/" target="_blank" rel="noopener noreferrer"><b>Rainmatter</b></a>, our fintech fund and incubator, has invested<br/> 
                        in several fintech startups with the goal of growing the<br/> 
                        Indian capital markets.<br/>
                    </p>
                    <p className='mb-5'>And yet, we are always up to something new every day.<br/> 
                        Catch up on the latest updates on our <a style={{textDecoration:"none",}} href="https://www.zerodha.com/blog/" target="_blank" rel="noopener noreferrer"><b>blog</b></a> or see what<br/> 
                        the media is <a style={{textDecoration:"none",}} href="https://www.zerodha.com/media/" target="_blank" rel="noopener noreferrer"><b>saying about us</b></a> or learn more about our<br/>
                        business and product philosophies.<br/>
                    </p>
                    
                </div>
                <div className="col-1"></div>
            </div>
        </div>
     );
}

export default Hero;