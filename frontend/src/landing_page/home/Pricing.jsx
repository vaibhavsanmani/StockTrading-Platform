import React from 'react'
function Pricing() {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-4">
                    <h2>Unbeatable Pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <div className='text-left'>
                        <a style={{textDecoration:"none"}} href='#'>See Pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div className="col-2"></div>
                <div className="col-6 text-center">
                    <div className="row ">
                        <div className="col p-4 border">
                            <h1 className='mb-3'>&#8377;0</h1>
                            <p>Free equity delivery and<br/> direct mutual funds</p>
                        </div>
                        <div className="col p-4 border">
                            <h1 className='mb-3'>&#8377;20</h1>
                            <p>Intraday & F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;