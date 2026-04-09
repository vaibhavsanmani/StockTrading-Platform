import React from 'react'
function Stats() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <h2 className='mb-5'>Trust With Confidence</h2>

                        <h4 className='mt-3'>Customer First Always</h4>
                        <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s 
                            largest broker; contributing to 15% of daily retail exchange volumes in India.
                        </p>

                        <h4 className='mt-3'>No spam or gimmicks</h4>
                        <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace,
                            the way you like. Our philosophies.
                        </p>

                        <h4 className='mt-3'>The Zerodha universe</h4>
                        <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services 
                            specific to your needs..
                        </p>

                        <h4 className='mt-3'>Do better with money</h4>
                        <p className='text-muted'>With initiatives like <a href="#">Nudge</a> and <a href="#">Kill Switch</a>, we don't just facilitate transactions, but actively help you do 
                            better with your money.
                        </p>
                </div>
                <div className="col-6">
                    <img src='media/images/ecosystem.png' style={{width:"100%"}}/>
                    <div className='text-center'>
                        <a style={{textDecoration:"none"}} href='#'>Explore the ecosystem <i class="fa-solid fa-arrow-right-long"></i></a>&nbsp;&nbsp;&nbsp;
                        <a style={{textDecoration:"none"}} href='#'>Try Kitto demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Stats;