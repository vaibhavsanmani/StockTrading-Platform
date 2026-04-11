import React from 'react';

function RightImage({ ImageUrl, productName, productDescription, learnMore }) {
    return (  
        <div className="container mb-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1 className="text-muted">{productName}</h1>

                    <p className="mt-4">{productDescription}</p>

                    <div className="d-flex gap-4 mt-4">
                        <a 
                            style={{ textDecoration: 'none' }} 
                            href={learnMore}
                        >
                            Learn More &nbsp;
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>

                <div className="col-md-6 text-center">
                    <img 
                        src={ImageUrl} 
                        alt={productName} 
                        className="img-fluid"
                    />
                </div>

            </div>
        </div>
    );
}

export default RightImage;