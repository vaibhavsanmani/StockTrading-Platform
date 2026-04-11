import React from 'react'
function LeftImage({
    ImageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (  
        <div className="container mb-5 mt-5">
            <div className="row">
                <div className="col-8">
                    <img src={ImageUrl}/>
                </div>
                <div className="col-4 mt-5">
                    <h1 className='text-muted'>{productName}</h1>
                    <p className='mt-4'>{productDescription}</p>
                    <div className='d-flex gap-4 mt-4'>
                        <a 
                            style={{textDecoration:'none'}} 
                            href={tryDemo}>Try Demo &nbsp;
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </a>
                        <a 
                            style={{textDecoration:'none'}} 
                            href={learnMore}>Learn More &nbsp;
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                    <div className='mt-3 d-flex gap-2 mt-4'>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="Google Play"/> </a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="App Store"/></a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default LeftImage;