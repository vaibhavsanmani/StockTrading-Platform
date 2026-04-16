import React from 'react'
function Education() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img src='media/images/education.svg'/>
                </div>
                <div className="col-6">
                    <h2 className='mb-4 fs-2'>Free and open market education</h2>
                    <p className='text-muted'>Varsity, the largest online stock market education book in the world 
                        covering everything from the basics to advanced trading.</p>
                    <div className='text-left'>
                        <a style={{textDecoration:"none"}} href='#'>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <p className='mt-5 text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <div className='text-left'>
                        <a style={{textDecoration:"none"}} href='#'>Trading Q&A <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default Education;