import React from 'react'
function Hero() {
    return ( 
        <>
            <div className='container p-5'>
                <div className="row text-center">
                    <img src="media/images/homeHero.png" alt="Hero Image" className='mb-5'/>
                    <h1>Investing for everyone</h1>
                    <p>Invest in stocks, mutual funds, and more with our easy-to-use platform.</p>
                    <button style={{"width":"25%" ,"margin":"0 auto"}} className='btn btn-primary p-3'>Open an Account</button>
                </div>  
            </div>
        </>
     );
}

export default Hero;